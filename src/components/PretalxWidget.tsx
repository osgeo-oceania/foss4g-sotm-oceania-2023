import React from 'react';

function PretalxWidget() {
    // Create the HTML content for the iframe's srcDoc
    const iframeContent = `
        <script type="text/javascript" src="https://talks.osgeo.org/foss4g-sotm-oceania-2023/schedule/widget/v2.en.js"></script>
        
        <pretalx-schedule event-url="https://talks.osgeo.org/foss4g-sotm-oceania-2023/" locale="en" style="--pretalx-clr-primary: #3aa57c"></pretalx-schedule>
        
        <noscript>
            <div class="pretalx-widget">
                <div class="pretalx-widget-info-message">
                    JavaScript is disabled in your browser. To access our schedule without JavaScript,
                    please <a target="_blank" href="https://talks.osgeo.org/foss4g-sotm-oceania-2023/schedule/">click here</a>.
                </div>
            </div>
        </noscript>
    `;

    return (
        <iframe
            title="Pretalx Schedule Widget"
            srcDoc={iframeContent}
            style={{ width: '100%', height: '6500px', border: 'none' }}
            sandbox="allow-scripts allow-same-origin allow-popups"
        />
    );
}

export default PretalxWidget;
