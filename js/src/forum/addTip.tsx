import IndexPage from "flarum/forum/components/IndexPage";
import { override } from "flarum/common/extend";
import app from "flarum/forum/app";
import LinkButton from "flarum/common/components/LinkButton";
export function addTip() {
    override(IndexPage.prototype, 'hero', function (original: any) {
        const existing = original();
        let tip = null;
        if ((app.current?.data as any)?.routeName != 'xypp-register-quiz.quiz' && !app.forum.attribute("xypp-register-quiz.authorized"))
            if (app.session?.user) {
                const groups = app.session.user.groups();
                if (groups && !groups.find(g => g && g.id() == app.forum.attribute<string>("xypp-register-quiz.group_id"))) {
                    tip = app.translator.trans('xypp-register-quiz.forum.quiz-tip.required');
                }
                if (app.session.user.attribute<boolean>("in_quiz")) {
                    tip = app.translator.trans('xypp-register-quiz.forum.quiz-tip.in_quiz');
                }
            }
        if (!tip) {
            return existing;
        }
        const additional = <div className="quiz-tip Alert Alert-info">
            <LinkButton href={app.route('xypp-register-quiz.quiz')}>{tip}</LinkButton>
        </div>

        if (Array.isArray(existing)) {
            return [additional, ...existing]
        }
        return <div> {[additional, existing]}</div>
    });
}