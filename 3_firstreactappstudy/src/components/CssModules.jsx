import classes from "./CssModules.module.scss";

export const CssModules = () => {
    const { container, title, button } = classes;
    return (
        <div className={container}>
            <p className={title}>CSS Modules.</p>
            <button className={button}>button</button>
        </div>
    )
}
