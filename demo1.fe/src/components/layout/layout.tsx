import {PropsWithChildren} from "react";

export default function Layout({children}: PropsWithChildren<{}>) {
    return (
        <>
            <div className={""} id={"test_layout_id"}>
                {children}
            </div>
        </>
    );
}