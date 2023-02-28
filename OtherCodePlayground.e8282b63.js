import{S as t,a as s,b as n,c as o}from"./chunks/index.f14b2a18.js";import{j as e}from"./chunks/jsx-runtime.bcbc4544.js";import"./chunks/index.af313609.js";const a=`import { useEffect, useState } from "react";
  
  const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  
  const getContent = async () => {
    await wait(300);
    return 'some content';
  };
  
  export const useContent = () => {
    const [content, setContent] = useState()
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      setIsLoading(true)
      getContent().then((result) => {
        setIsLoading(false)
        setContent(result);
      });
    }, []);
  
    return {content, isLoading}
  }`,r=`import { useState, useCallback } from "react";
  import { useContent } from './hooks/useContent';
  
  export default function App() {
    const {content, isLoading} = useContent()
    const [height, setHeight] = useState(0)
    
    const divRef = useCallback((node) => {
        if(node) {
            setHeight(node.getBoundingClientRect().height)
        }
    })
  
    if (isLoading) {
      return <div>Loading...</div>
    }
    
    return (
      <>
        <div ref={divRef}>
          {content}
        </div>
        <span>Height is: {height}</span>
      </>
    )
  }`;function c(){return e.exports.jsx("div",{dir:"ltr",className:"-ml-5 -mr-5",children:e.exports.jsx(t,{template:"react",options:{showTabs:!0,classes:{"sp-layout":"!rounded-lg","sp-stack":"md:min-h-[450px]","sp-tabs":"!bg-[#343a46]","sp-tabs-scrollable-container":"!gap-4 !pl-4 !pr-4","sp-tab-button":"!text-lg !text-[#FDF1E7]","sp-code-editor":"!bg-[#16181d] text-sm","sp-overlay":"!bg-[#23272F]","sp-cube-wrapper":"spinner","sp-cube":"!hidden"}},theme:"dark",files:{"/App.js":r,"/hooks/useContent.js":a},children:e.exports.jsxs(s,{children:[e.exports.jsx(n,{}),e.exports.jsx(o,{showOpenInCodeSandbox:!1})]})})})}export{c as default};
