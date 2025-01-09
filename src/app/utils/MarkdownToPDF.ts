export default async function markdownToPDF(markdown) {
  const formData = new URLSearchParams();
  formData.append("markdown", markdown);
  formData.append(
    "css",
    `hr,img{box-sizing:content-box}details,figcaption,figure,table{display:block}img,table{max-width:100%}kbd,mark{color:#1f2328}h1,h2{padding-bottom:.3em}blockquote,h6{color:#636c76}img,table tr{background-color:#fff}kbd,table tr:nth-child(2n){background-color:#f6f8fa}.highlight pre,pre>code{word-break:normal}pre,pre code,pre tt{word-wrap:normal}.contains-task-list,.footnotes li,sub,sup{position:relative}h1:hover .anchor .octicon-link:before,h2:hover .anchor .octicon-link:before,h3:hover .anchor .octicon-link:before,h4:hover .anchor .octicon-link:before,h5:hover .anchor .octicon-link:before,h6:hover .anchor .octicon-link:before{width:16px;height:16px;content:' ';display:inline-block;background-color:currentColor;-webkit-mask-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");mask-image:url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>")}summary{display:list-item}[hidden]{display:none!important}a{background-color:transparent;color:#0969da;text-decoration:none}abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.pl-corl,a:hover{text-decoration:underline}b,strong,table th{font-weight:600}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em;border-bottom:1px solid #d0d7deb3}mark{background-color:#fff8c5}small{font-size:90%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}.csv-data th,.csv-data tr{border-top:0}figure{margin:1em 40px}hr{overflow:hidden;background:#d0d7de;border-bottom:1px solid #d0d7deb3;height:.25em;padding:0;margin:24px 0;border:0}input{font:inherit;margin:0;overflow:visible;font-family:inherit;font-size:inherit;line-height:inherit}[type=button],[type=reset],[type=submit]{-webkit-appearance:button;appearance:button}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;appearance:button;font:inherit}.pl-mi,dl dt{font-style:italic}.pl-mb,.pl-mdr,.pl-sr .pl-cce{font-weight:700}a:not([href]),h1:hover .anchor,h2:hover .anchor,h3:hover .anchor,h4:hover .anchor,h5:hover .anchor,h6:hover .anchor{text-decoration:none}::placeholder{color:#636c76;opacity:1}.markdown-body::before,hr::before{display:table;content:""}.markdown-body::after,hr::after{display:table;clear:both;content:""}table{border-spacing:0;border-collapse:collapse;width:max-content;overflow:auto}dl,td,th{padding:0}.task-list-item.enabled label,details summary{cursor:pointer}.task-list-item .handle,code br,details:not([open])>:not(summary),tt br{display:none}.octicon,kbd,summary h1,summary h2,summary h3,summary h4,summary h5,summary h6{display:inline-block}[role=button]:focus,a:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:#0969da solid 2px;outline-offset:-2px;box-shadow:none}[role=button]:focus:not(:focus-visible),a:focus:not(:focus-visible),input[type=checkbox]:focus:not(:focus-visible),input[type=radio]:focus:not(:focus-visible){outline:transparent solid 1px}[role=button]:focus-visible,a:focus-visible,input[type=checkbox]:focus-visible,input[type=radio]:focus-visible{outline:#0969da solid 2px;outline-offset:-2px;box-shadow:none}a:not([class]):focus,a:not([class]):focus-visible,input[type=checkbox]:focus,input[type=checkbox]:focus-visible,input[type=radio]:focus,input[type=radio]:focus-visible{outline-offset:0}kbd{padding:3px 5px;font:11px/10px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;vertical-align:middle;border:1px solid #afb8c133;border-bottom-color:#afb8c133;border-radius:6px;box-shadow:inset 0 -1px 0 #afb8c133}code,pre,samp,tt{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace}.csv-data th,dl dt,h2,h3,h4,h5,h6{font-weight:600}.markdown-alert,blockquote{border-left:.25em solid #d0d7de}h1,h2,h3,h4,h5,h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}h2{font-size:1.5em;border-bottom:1px solid #d0d7deb3}h3{font-size:1.25em}h4{font-size:1em}h5{font-size:.875em}h6{font-size:.85em}code,samp,tt{font-size:85%}blockquote{margin:0;padding:0 1em}ol,ul{padding-left:2em}ol ol,ol[type="i s"],ul ol{list-style-type:lower-roman}ol ol ol,ol ul ol,ol[type="a s"],ul ol ol,ul ul ol{list-style-type:lower-alpha}dd{margin-left:0}.octicon{fill:currentColor;overflow:visible!important;vertical-align:text-bottom;fill:currentColor}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none;appearance:none}.mr-2{margin-right:.5rem!important}.markdown-body>:first-child,.markdown-body>:first-child>.heading-element:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.highlight pre,.markdown-alert>:last-child,blockquote>:last-child,table td>:last-child{margin-bottom:0}a:not([href]){color:inherit}.absent,.markdown-alert.markdown-alert-caution .markdown-alert-title{color:#d1242f}.anchor{float:left;padding-right:4px;margin-left:-20px;line-height:1}.anchor:focus,[tabindex="0"]:focus:not(:focus-visible),details-dialog:focus:not(:focus-visible){outline:0}blockquote,details,dl,ol,p,pre,table,ul{margin-top:0;margin-bottom:16px}.markdown-alert>:first-child,blockquote>:first-child{margin-top:0}h1 .octicon-link,h2 .octicon-link,h3 .octicon-link,h4 .octicon-link,h5 .octicon-link,h6 .octicon-link{color:#1f2328;vertical-align:middle;visibility:hidden}h1:hover .anchor .octicon-link,h2:hover .anchor .octicon-link,h3:hover .anchor .octicon-link,h4:hover .anchor .octicon-link,h5:hover .anchor .octicon-link,h6:hover .anchor .octicon-link{visibility:visible}h1 code,h1 tt,h2 code,h2 tt,h3 code,h3 tt,h4 code,h4 tt,h5 code,h5 tt,h6 code,h6 tt{padding:0 .2em;font-size:inherit}summary h1 .anchor,summary h2 .anchor,summary h3 .anchor,summary h4 .anchor,summary h5 .anchor,summary h6 .anchor{margin-left:-40px}summary h1,summary h2{padding-bottom:0;border-bottom:0}ol.no-list,ul.no-list{padding:0;list-style-type:none}ol[type="A s"]{list-style-type:upper-alpha}ol[type="I s"]{list-style-type:upper-roman}div>ol:not([type]),ol[type="1"]{list-style-type:decimal}ol ol,ol ul,ul ol,ul ul{margin-top:0;margin-bottom:0}.highlight,dl dd{margin-bottom:16px}li>p{margin-top:16px}li+li{margin-top:.25em}dl dt{padding:0;margin-top:16px;font-size:1em}dl dd{padding:0 16px}table td,table th{padding:6px 13px;border:1px solid #d0d7de}table tr{border-top:1px solid #d0d7deb3}.emoji,table img{background-color:transparent}img[align=right]{padding-left:20px}img[align=left]{padding-right:20px}.emoji{max-width:none;vertical-align:text-top}span.frame{display:block;overflow:hidden}span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid #d0d7de}span.frame span img{display:block;float:left}span.frame span span{display:block;padding:5px 0 0;clear:both;color:#1f2328}span.align-center,span.align-right{display:block;overflow:hidden;clear:both}span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}span.align-center span img{margin:0 auto;text-align:center}span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}span.align-right span img{margin:0;text-align:right}span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}span.float-left span{margin:13px 0 0}span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}code,tt{padding:.2em .4em;margin:0;white-space:break-spaces;background-color:#afb8c133;border-radius:6px}del code{text-decoration:inherit}pre code{font-size:100%}pre>code{padding:0;margin:0;white-space:pre;background:0 0;border:0}.highlight pre,pre{padding:16px;overflow:auto;font-size:85%;line-height:1.45;color:#1f2328;background-color:#f6f8fa;border-radius:6px}pre code,pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;background-color:transparent;border:0}.csv-data td,.csv-data th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.footnotes ol,.footnotes ol ul{padding-left:16px}.csv-data .blob-num{padding:10px 8px 9px;text-align:right;background:#fff;border:0}.csv-data th{background:#f6f8fa}.task-list-item label,g-emoji{font-weight:400}[data-footnote-ref]::before{content:"["}[data-footnote-ref]::after{content:"]"}.footnotes{font-size:12px;color:#636c76;border-top:1px solid #d0d7de}.footnotes ol ul{display:inline-block;margin-top:16px}.footnotes li:target::before{position:absolute;top:-8px;right:-8px;bottom:-8px;left:-24px;pointer-events:none;content:"";border:2px solid #0969da;border-radius:6px}.footnotes li:target{color:#1f2328}.footnotes .data-footnote-backref g-emoji{font-family:monospace}.pl-ba,.pl-c{color:#57606a}.pl-c1,.pl-ent,.pl-s .pl-v{color:#0550ae}.pl-e,.pl-en{color:#6639ba}.pl-s .pl-s1,.pl-smi{color:#24292f}.pl-k{color:#cf222e}.pl-pds,.pl-s,.pl-s .pl-pse .pl-s1,.pl-sr,.pl-sr .pl-cce,.pl-sr .pl-sra,.pl-sr .pl-sre{color:#0a3069}.pl-smw,.pl-v{color:#953800}.pl-bu{color:#82071e}.pl-c2,.pl-ii{color:#f6f8fa}.pl-ii{background-color:#82071e}.pl-c2{background-color:#cf222e}.pl-sr .pl-cce{color:#116329}.pl-ml{color:#3b2300}.pl-mh,.pl-mh .pl-en,.pl-ms{font-weight:700;color:#0550ae}.pl-mb,.pl-mi{color:#24292f}.pl-md{color:#82071e;background-color:#ffebe9}.pl-mi1{color:#116329;background-color:#dafbe1}.pl-mc{color:#953800;background-color:#ffd8b5}.pl-mi2{color:#eaeef2;background-color:#0550ae}.pl-mdr{color:#8250df}.pl-sg{color:#8c959f}.pl-corl{color:#0a3069}[role=button]:focus:not(:focus-visible),[role=tabpanel][tabindex="0"]:focus:not(:focus-visible),a:focus:not(:focus-visible),button:focus:not(:focus-visible),summary:focus:not(:focus-visible){outline:0;box-shadow:none}g-emoji{display:inline-block;min-width:1ch;font-family:"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1em;font-style:normal!important;line-height:1;vertical-align:-.075em}g-emoji img{width:1em;height:1em}.task-list-item{list-style-type:none}.task-list-item+.task-list-item{margin-top:.25rem}.task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}.contains-task-list:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.contains-task-list:focus-within .task-list-item-convert-container,.contains-task-list:hover .task-list-item-convert-container{display:block;width:auto;height:24px;overflow:visible;clip:auto}::-webkit-calendar-picker-indicator{filter:invert(50%)}.markdown-alert{padding:.5rem 1rem;margin-bottom:1rem;color:inherit}.markdown-alert .markdown-alert-title{display:flex;font-weight:500;align-items:center;line-height:1}.markdown-alert.markdown-alert-note{border-left-color:#0969da}.markdown-alert.markdown-alert-note .markdown-alert-title{color:#0969da}.markdown-alert.markdown-alert-important{border-left-color:#8250df}.markdown-alert.markdown-alert-important .markdown-alert-title{color:#8250df}.markdown-alert.markdown-alert-warning{border-left-color:#bf8700}.markdown-alert.markdown-alert-warning .markdown-alert-title{color:#9a6700}.markdown-alert.markdown-alert-tip{border-left-color:#1a7f37}.markdown-alert.markdown-alert-tip .markdown-alert-title{color:#1a7f37}.markdown-alert.markdown-alert-caution{border-left-color:#cf222e}`
  );

  try {
    const response = await fetch("https://md-to-pdf.fly.dev", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to generate PDF");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "exported.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url); // Clean up
  } catch (error) {
    console.error("Error downloading the PDF:", error);
  }
}
