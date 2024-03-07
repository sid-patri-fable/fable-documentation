import React, { useEffect, useState } from "react";
import "../index.css";
import TOC from "../toc";
import SupportBanner from "../support-banner";
import { useSearchParams } from 'react-router-dom';

const menuIconUrl =
  "https://documentden-deployments.s3.us-east-1.amazonaws.com/public/2058d1f5-f692-4341-b4dc-2014ccad5ecc";

const CustomLayout = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const {
    headerComp: Header,
    sidepanelComp: Sidepanel,
    footerComp: Footer,
    contentFooterComp: ContentFooter,
  } = props;

  const [showSidePanel, setShowSidePanel] = useState("init");

  if (searchParams.get('mini')) {
    return (
      <main style={{ maxWidth: '680px', padding: '1rem' }} className='main-con'>
        <div className="mdx-content">{props.children}</div>
      </main>
    )
  }

  return (
    <>
      <Header />
      <div className="content-con">
        <Sidepanel show={showSidePanel} closeSidepanel={() => setShowSidePanel(false)} />
        <div className="content">
          <button type="button" className="menu-icon">
            <img
              style={{ cursor: "pointer" }}
              src={menuIconUrl}
              alt=""
              width={28}
              height={28}
              onClick={() =>
                setShowSidePanel((prev) =>
                  prev === "init" || !prev ? true : false
                )
              }
            />
          </button>
          <div className="mdx-content">{props.children}</div>
          <SupportBanner />
          <ContentFooter />
        </div>
        {/* <TOC toc={props.toc.length && props.toc} /> */}
      </div>
      <Footer />
    </>
  );
};

export default CustomLayout;
