import Modal, { IInternalModalAttrs } from 'flarum/common/components/Modal';
import app from 'flarum/admin/app';
import Button from 'flarum/common/components/Button';
import Switch from "flarum/common/components/Switch"
import Problem from '../../common/model/Problem';
import Stream from 'flarum/common/utils/Stream';
import ItemList from 'flarum/common/utils/ItemList';
function _trans(key: string, args?: Record<string, any>) {
    return app.translator.trans(`xypp-register-quiz.admin.quiz.${key}`, args);
}
export default class QuizItemModal extends Modal<{
    item: Problem,
    update: (item: Problem) => void
} & IInternalModalAttrs> {
    form: {
        problem?: Stream<string>[];
        title?: Stream<string>;
        content?: Stream<string>;
        answer?: Stream<number>;
    } = {};
    oninit(vnode: any): void {
        super.oninit(vnode);
        this.form = {
            problem: (this.attrs.item?.problem() || []).map(i => Stream(i)),
            title: Stream(this.attrs.item?.title()),
            content: Stream(this.attrs.item?.content()),
            answer: Stream(this.attrs.item?.answer()),
        }
    }
    oncreate(vnode: any): void {
        super.oncreate(vnode);
    }
    className() {
        return 'Modal Modal--small';
    }
    title() {
        return _trans("title");
    }
    content() {
        return (
            <div className="Modal-body">
                <div className="Form">
                    <div className="Form-group">
                        <label for="customize-goods-ipt-name">{_trans("title")}</label>
                        <input id="customize-goods-ipt-name" required className="FormControl" type="text" bidi={this.form.title} />
                    </div>
                    <div className="Form-group">
                        <label for="customize-goods-ipt-content">{_trans("content")}</label>
                        <textarea id="customize-goods-ipt-content" required className="FormControl" bidi={this.form.content} />
                    </div>

                    <div>
                        <div>{_trans("options")}</div>
                        {this.options().toArray()}
                    </div>
                    <div className="Form-group">
                        <Button class="Button Button--primary" type="submit" loading={this.loading}>
                            {_trans("save")}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    options() {
        const items = new ItemList();

        this.form.problem?.forEach((i, index) => {
            items.add(`problem-${index}`, (
                <div className="quiz-option-row">
                    <input name="customize-goods-ipt-answer" value={index} type="radio" checked={this.form.answer() === index} onclick={() => this.form.answer(index)} />
                    <input id={`customize-goods-ipt-problem-${index}`} required className="FormControl" type="text" bidi={i} onblur={((e: any) => {
                        if (e.target.value === "") {
                            this.form.problem?.splice(index, 1)
                        }
                    }).bind(this)} />
                </div>
            ))
        })

        items.add('add-problem', (
            <div className="quiz-option-row">
                <input type="radio" disabled />
                <input id={`customize-goods-ipt-problem-add`} className="FormControl" type="text" onchange={((e: any) => {
                    this.form.problem?.push(Stream(e.target.value))
                }).bind(this)} />
            </div>
        ))
        return items;
    }

    async onsubmit(e: any) {
        e.preventDefault();
        this.loading = true;
        m.redraw();
        let item = this.attrs.item || app.store.createRecord<Problem>("register-quiz-problem");

        try {
            const newItem = await item.save({
                title: this.form.title(),
                content: this.form.content(),
                problem: this.form.problem?.map(i => i()),
                answer: this.form.answer()
            });

            this.attrs.update && this.attrs.update(newItem);
            app.modal.close();
        } finally {
            this.loading = false;
            m.redraw();
        }
    }
}
