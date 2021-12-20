import{p as e,N as t,r as a,_ as n,n as s}from"./b9bb21ac.js";import{P as o,s as c,u as r,r as d}from"./b671a25f.js";const l={title:"Error: Page not found",description:null,image:null};class i extends o{connectedCallback(){super.connectedCallback(),c("name","render:status_code","404"),r({...this.defaultMeta,...l})}disconnectedCallback(){d("name","render:status_code"),super.disconnectedCallback()}}let u=class extends i{render(){return e`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="${t("home")}">Back to home</a>
        </p>
      </section>
    `}meta(){return l}};u.styles=a`
    :host {
      display: block;
    }

    section {
      padding: 1rem;
      text-align: center;
    }
  `,u=n([s("page-not-found")],u);export{u as PageNotFound};
