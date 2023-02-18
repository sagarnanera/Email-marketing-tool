import React, { useRef } from "react";
import EmailEditor from "react-email-editor";

const EmailBuilder = () => {
    const emailEditorRef = useRef(null);

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml(data => {
            const { design, html } = data;
            console.log("exportHtml", html);
        });
    };

    const onLoad = () => {
        // editor instance is created
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
        console.log("onload");
    };

    const onReady = () => {
        // editor is ready
        console.log("onReady");
    };

    return (
        <div className="email-builder">
            <EmailEditor
                minHeight={"90vh"}
                projectId={135104}
                templateId={294668}
                ref={emailEditorRef}
                onReady={onReady}
                onLoad={onLoad}
            />
        </div>
    );
};

export default EmailBuilder;
