import{S as s,a as r,b as t,c as o}from"./chunks/index.f14b2a18.js";import{j as e}from"./chunks/jsx-runtime.bcbc4544.js";import"./chunks/index.af313609.js";const a=`import { useState, useCallback } from "react";
    
export default function App() {
    const [height, setHeight] = useState(0)
      
    const divRef = useCallback((node) => {
        let resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                if (entry.borderBoxSize && entry.borderBoxSize.length) {
                    setHeight(entry.borderBoxSize[0].blockSize);
                }
            }
        });

        if(node) {
            resizeObserver.observe(node);
        } else {
            resizeObserver.disconnect();
            resizeObserver = null;
        }
    })
      
    return (
        <>
            <div ref={divRef}>
                some content
            </div>
            <span>Height is: {height}</span>
        </>
    )
}`;function d(){return e.exports.jsx("div",{dir:"ltr",className:"-ml-5 -mr-5",children:e.exports.jsx(s,{template:"react",options:{showTabs:!0,classes:{"sp-layout":"!rounded-lg","sp-stack":"md:min-h-[450px]","sp-tabs":"!bg-[#343a46]","sp-tabs-scrollable-container":"!gap-4 !pl-4 !pr-4","sp-tab-button":"!text-lg !text-[#FDF1E7]","sp-code-editor":"!bg-[#16181d] text-sm","sp-overlay":"!bg-[#23272F]","sp-cube-wrapper":"spinner","sp-cube":"!hidden"}},theme:"dark",files:{"/App.js":a},children:e.exports.jsxs(r,{children:[e.exports.jsx(t,{}),e.exports.jsx(o,{showOpenInCodeSandbox:!1})]})})})}export{d as default};
