import app from 'flarum/forum/app';
import Page, { IPageAttrs } from 'flarum/common/components/Page';
import IndexPage from 'flarum/forum/components/IndexPage';
import listItems from 'flarum/common/helpers/listItems';
import LinkButton from 'flarum/common/components/LinkButton';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import ItemList from 'flarum/common/utils/ItemList';
import Button from 'flarum/common/components/Button';
import Test from '../../common/model/Test';
import Stream from 'flarum/common/utils/Stream';

function _trans(key: string, args?: Record<string, any>) {
    return app.translator.trans(`xypp-register-quiz.forum.quiz.${key}`, args);
}
export class QuizPage extends Page {
    loading = false;
    inQuiz = false;
    test?: Test;
    doorkey: Stream<string> = Stream("");
    loading_doorkey = false;
    answers?: Stream<number>[];
    interval?: number;
    lastSaving?: Promise<any>;
    checkedDoorkey = false;
    oninit(vnode: any): void {
        super.oninit(vnode);
        this.inQuiz = !!(app.session?.user && app.session.user.attribute("in_quiz"));
        if (this.inQuiz) {
            this.loading = true;

            app.store.find<Test>("register-quiz-test").then(test => {
                this.test = test;
                this.loading = false;
                this.answers = (test.problems() || []).map((_, i) => new Stream(test.saved()[i]));
                this.interval = setInterval(this.checkAndSaveAnswer.bind(this), 10000) as any;
                m.redraw();
            });
        }
    }
    onbeforeremove(vnode: any): void {
        super.onbeforeremove(vnode);
        this.interval && clearInterval(this.interval);
    }
    view() {
        return <div>
            {IndexPage.prototype.hero()}
            <div className="container">
                <div className="sideNavContainer">
                    <nav className="IndexPage-nav sideNav">
                        <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
                    </nav>
                    <div className='quiz-page'>
                        {this.main()}
                    </div>
                </div>
            </div>
        </div>
    }

    main() {
        if (!app.session?.user) {
            return <h1>{_trans("login_first")}</h1>
        }
        const groups = app.session.user.groups();
        if (
            app.forum.attribute("xypp-register-quiz.authorized")
            ||
            (groups && groups.find(g => g && g.id() == app.forum.attribute<string>("xypp-register-quiz.group_id")))
        ) {
            return <h1>{_trans("already_authorized")}</h1>
        }
        if (this.checkedDoorkey) {
            return <h1>{_trans("invite_code_checked")}</h1>
        }
        if (!this.inQuiz) {
            return this.prepareForm().toArray();
        } else {
            return this.quiz().toArray();
        }
    }

    prepareForm() {
        const items = new ItemList<JSX.Element>();

        items.add('title', <h1>{_trans("title")}</h1>, 10);

        items.add('description', <div>{_trans("desc", {
            time: app.forum.attribute("xypp-register-quiz.test_time"),
            count: app.forum.attribute("xypp-register-quiz.problem_count"),
            require: app.forum.attribute("xypp-register-quiz.require")
        })}</div>);

        items.add('startQuiz', <Button onclick={this.start.bind(this)} className='Button Button--primary' loading={this.loading} disabled={this.loading}>
            {_trans("start")}
        </Button>);

        if (flarum.extensions['fof-doorman'])
            items.add('doorkey', <div className='doorkey-input'>
                <h2>{_trans("invite")}</h2>
                <label>{_trans("invite_code")}</label>
                <input type="text" placeholder={_trans("invite")} bidi={this.doorkey} className='FormControl doorkey-input-input' />
                <Button className='Button Button--primary' onclick={this.submitDoorkey.bind(this)} loading={this.loading} disabled={this.loading}>
                    {_trans("submit")}
                </Button>
            </div>);



        return items;
    }

    quiz() {
        const items = new ItemList();

        if (!this.test) {
            items.add("loading", <LoadingIndicator />);
        } else if (this.test.submitted()) {
            items.add("submitted", <h1>{_trans("submitted")}</h1>);
            items.add("score", <div className='score'>{_trans("score", { score: this.test.score(), total: (this.test.problems() || []).length, span: <span className='score-value' /> })}</div>)

            if (this.test.score() >= app.forum.attribute<number>("xypp-register-quiz.require")) {
                items.add("authorized", <div>{_trans("authorized")}</div>);
            } else {
                items.add("not-pass", <div>{_trans("not_pass", {
                    score: this.test.score(),
                    require: app.forum.attribute("xypp-register-quiz.require"),
                    retry: <Button className='Button Button--primary' onclick={() => { this.inQuiz = false; this.test = undefined }} />
                })}</div>);
            }
        } else {
            items.add("title", <h1>{_trans("in_quiz")}</h1>);

            items.add("expired_at", <div>{_trans("expired_at", { time: this.test.expired_at()?.toLocaleString() })}</div>);

            const problems = this.test.problems() || [];

            problems.forEach((problem, problemIdx) => {
                problem && items.add("pid-" + problem.id(), <div className='quiz-problem'>
                    <div className='quiz-problem-title'>{problem.title()}</div>
                    <div className='quiz-problem-content'>{problem.content()}</div>
                    <div className='quiz-problem-options'>{problem.problem().map((o, idx) =>
                        <div className='quiz-problem-option'>
                            <input type="radio"
                                id={"pid-" + problem.id() + "answer-" + idx}
                                name={"pid-" + problem.id() + "answer"}
                                value={idx}
                                checked={this.answers?.[problemIdx]() == idx}
                                onclick={() => this.answers?.[problemIdx](idx)}
                            />
                            <label for={"pid-" + problem.id() + "answer-" + idx}>{o}</label>
                        </div>)}
                    </div>
                </div>)
            });

            items.add("submit", <Button className='Button Button--primary' onclick={this.submitQuiz.bind(this)} loading={this.loading} disabled={this.loading}>
                {_trans("submit")}
            </Button>);
        }

        return items;
    }

    start() {
        this.loading = true;
        this.inQuiz = true;
        m.redraw();
        app.store.createRecord<Test>("register-quiz-test").save({}).then(test => {
            this.test = test;
            this.loading = false;
            this.answers = (test.problems() || []).map(_ => new Stream(null));
            this.interval = setInterval(this.checkAndSaveAnswer.bind(this), 10000) as any;
            m.redraw();
        });
    }

    async submitDoorkey() {
        this.loading = true;
        m.redraw();

        try {
            await app.request({
                method: "POST",
                url: app.forum.attribute("apiUrl") + "/register-quiz-submit-doorkey",
                body: { doorkey: this.doorkey() },
            });
            this.checkedDoorkey = true;
            app.forum.pushAttributes({
                "xypp-register-quiz.authorized": true
            });
        } finally {
            this.loading = false;
            m.redraw();
        }
    }

    getAnswer() {
        if (this.test && this.answers) {
            let changed = false;
            const p = this.test.problems() || [];
            const toSaveAnswer = this.test!.saved();
            p.map((_, i) => {
                if (this.answers![i]() != toSaveAnswer[i]) {
                    toSaveAnswer[i] = this.answers![i]();
                    changed = true;
                }
            });
            if (changed) {
                return toSaveAnswer;
            }
        }
        return false;
    }
    checkAndSaveAnswer() {
        if (this.lastSaving) {
            return;
        }
        const toSaveAnswer = this.getAnswer();
        if (toSaveAnswer) {
            this.lastSaving = this.test!.save({ saved: toSaveAnswer }).finally(() => this.lastSaving = undefined);
        }
    }

    async submitQuiz() {
        this.loading = true;
        this.interval && clearInterval(this.interval);
        m.redraw();
        this.lastSaving && await this.lastSaving;
        const toSaveAnswer = this.getAnswer();
        this.test = await this.test!.save({ saved: toSaveAnswer, submit: true });
        this.loading = false;
        m.redraw();
        if (this.test.score() >= app.forum.attribute<number>("xypp-register-quiz.require")) {
            app.forum.pushAttributes({
                "xypp-register-quiz.authorized": true
            });
        }
    }
}