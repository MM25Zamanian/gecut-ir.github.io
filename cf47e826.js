import{$ as e,u as a,o as t,r as s,a as n,_ as o,n as r}from"./2ad61604.js";import{P as c,s as d,u as l,r as i}from"./f68dca70.js";const u={title:"Error: Page not found",description:null,image:null};class m extends c{connectedCallback(){super.connectedCallback(),d("name","render:status_code","404"),l({...this.defaultMeta,...u})}disconnectedCallback(){i("name","render:status_code"),super.disconnectedCallback()}}let p=class extends m{render(){return e`
      <section>
        <h1>Page not found</h1>

        <p>
          <a href="${a("home")}">Back to home</a>
        </p>
      </section>
    `}meta(){return u}};p.styles=[t(s),n`
      :host {
        display: block;
      }

      section {
        padding: 1rem;
        text-align: center;
      }
    `],p=o([r("page-not-found")],p);export{p as PageNotFound};
