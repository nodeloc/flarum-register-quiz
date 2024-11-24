import ExtensionPage from "flarum/admin/components/ExtensionPage";
import app from 'flarum/admin/app';
import Button from "flarum/common/components/Button";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Model from "flarum/common/Model";
import ItemList from "flarum/common/utils/ItemList";
import Problem from "../../common/model/Problem";
import QuizItemModal from "./QuizItemModal";
import Select from "flarum/common/components/Select";
import Group from "flarum/common/models/Group";
function _trans(key: string, args?: Record<string, any>) {
    return app.translator.trans(`xypp-register-quiz.admin.settings.${key}`, args);
}
export default class adminPage extends ExtensionPage {
    problem: Problem[] = [];
    deletingCustom: Record<string, Record<string, boolean>> = {}
    loadingData: boolean = false;
    groupOpt: Record<string, string> = {}
    oncreate(vnode: any): void {
        super.oncreate(vnode);
        this.load();
        app.store.all<Group>('groups').forEach(t => t && (this.groupOpt[t.id()!] = t.nameSingular()))
    }
    content(vnode: any) {
        return <div className="container">
            {this.settingComponents().toArray()}

            {this.getModelList(`problem`, 'problem', QuizItemModal)}
        </div >
    }

    settingComponents() {
        const items = new ItemList();
        items.add('test_time', this.buildSettingComponent({
            label: _trans('test_time'),
            setting: 'xypp-register-quiz.test_time',
            type: 'number',
        }));
        items.add("problem_count", this.buildSettingComponent({
            label: _trans('problem_count'),
            setting: 'xypp-register-quiz.problem_count',
            type: 'number',
        }));
        items.add("require", this.buildSettingComponent({
            label: _trans('require'),
            setting: 'xypp-register-quiz.require',
            type: 'number',
        }));
        items.add("group", <div>
            <label>{_trans('group')}</label>
            <div>
                <Select options={this.groupOpt} value={this.setting("xypp-register-quiz.group_id")()} onchange={this.setting("xypp-register-quiz.group_id")}></Select>
            </div>
        </div>);
        items.add("save", this.submitButton());
        return items;
    }


    async load() {
        this.loadingData = true;
        m.redraw();
        this.problem = await app.store.find<Problem[]>('register-quiz-problem');
        this.loadingData = false;
        m.redraw();
    }

    getModelList(translateBaseKey: string, itemName: keyof this, component: any) {
        return <div>
            <h2>{_trans(translateBaseKey + ".title")}</h2>
            <table>
                <thead>
                    <tr>
                        <th>{_trans(translateBaseKey + ".name")}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (Array.isArray(this[itemName]) ? this[itemName] : [this[itemName]])
                            .map(item => <tr className="custom-row">
                                <td>{item.title()}</td>
                                <td>
                                    <Button className="Button Button--primary" onclick={this.edit(item, component, itemName)}>
                                        <i class="fas fa-edit"></i>
                                    </Button>
                                    <Button className="Button Button--primary" onclick={this.delete(item, itemName)}>
                                        <i class="fas fa-trash-alt"></i>
                                    </Button>
                                </td>
                            </tr>)
                    }
                    <tr>
                        <td colspan="2">
                            {this.loadingData
                                ?
                                <LoadingIndicator></LoadingIndicator>
                                :
                                <Button className="Button Button--primary" onclick={this.add(component, itemName)}>
                                    <i class="fas fa-plus"></i>
                                    {_trans(translateBaseKey + ".add")}
                                </Button>
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    }

    edit(model: Model, component: any, itemName: keyof this) {
        return (e: any) => {
            e.preventDefault();
            app.modal.show(component, {
                item: model,
                update: (item: any) => {
                    if (Array.isArray(this[itemName]))
                        this[itemName] = this[itemName].map(c => c.id() == item.id() ? item : c) as any;
                    else
                        this[itemName] = item;
                    m.redraw();
                }
            });
        }
    }
    add(component: any, itemName: keyof this) {
        return (e: any) => {
            e.preventDefault();
            app.modal.show(component, {
                update: (item: any) => {
                    if (Array.isArray(this[itemName]))
                        this[itemName].push(item);
                    else
                        this[itemName] = item;
                    m.redraw();
                }
            });
        }
    }
    delete(model: Model, itemName: keyof this) {
        return (e: any) => {
            e.preventDefault();
            if (!confirm(_trans("delete_confirm") + "")) return;
            this.deletingCustom[itemName as string][model.id() + ""] = true;
            m.redraw();
            model.delete().then(() => {

                if (Array.isArray(this[itemName]))
                    this[itemName] = this[itemName].filter(c => c.id() != model.id()) as any;
                else
                    (this[itemName] as any) = null;

                delete this.deletingCustom[itemName as string][model.id() + ""];
                m.redraw();
            });
        }
    }

}