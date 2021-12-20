import{p as t,L as i,c as a,k as s,m as e,r,_ as l,t as o,n}from"./b9bb21ac.js";import{P as d}from"./b671a25f.js";let p=class extends d{constructor(){super(...arguments),this._part=void 0}render(){return t`
      <section>
        ${void 0!==this._part?t`
              <h2 class="title">سوره ${this._part.title}</h2>
              <div class="list fa">
                <div class="list-item">
                  <div class="list-item-name">نوع</div>
                  <div class="list-item-value">
                    ${this._part.revelation_place}
                  </div>
                </div>
                <div class="list-item">
                  <div class="list-item-name">جزء</div>
                  <div class="list-item-value">${this._part.part} ام</div>
                </div>
                <div class="list-item">
                  <div class="list-item-name">تعداد آیه</div>
                  <div class="list-item-value">${this._part.counts.part}</div>
                </div>
                <div class="list-item">
                  <div class="list-item-name">تعداد کلمه</div>
                  <div class="list-item-value">${this._part.counts.words}</div>
                </div>
                <div class="list-item">
                  <div class="list-item-name">تعداد حرف</div>
                  <div class="list-item-value">${this._part.counts.letter}</div>
                </div>
              </div>
              <div class="parts">
                ${this._part.parts.map(((i,a)=>t`
                      <div
                        class="part"
                        @click="${this.translation}"
                        @keyup="${this.translation}"
                      >
                        <div class="part-text fa">
                          ${i.text} ﴿${a+1}﴾
                        </div>
                        <div class="part-translation">
                          ${i.translation} (${a+1})
                        </div>
                      </div>
                    `))}
              </div>
            `:t`
              <h2 class="title load">|</h2>
              <div class="list fa load">
                ${Array.from({length:6},((t,i)=>i)).map((()=>t`
                    <div class="list-item">
                      <div class="list-item-name"></div>
                      <div class="list-item-value"></div>
                    </div>
                  `))}
              </div>
              <div class="parts load">
                ${Array.from({length:10},((t,i)=>i)).map((()=>t` <div class="part"></div> `))}
              </div>
            `}
      </section>
    `}async firstUpdated(){console.log(i.location.params.id),await fetch("/api/quran.json").then((t=>t.json())).then((t=>{this._part=t.filter((t=>t.id===i.location.params.id))[0]}))}translation(t){const i=t.target.parentElement;i.classList.contains("selected")?i.classList.remove("selected"):i.classList.add("selected")}meta(){return{title:void 0!==this._part?`سوره ${this._part?.title}`:"",description:a.appDescription}}};p.styles=[s(e),r`
      section {
        padding: 1rem;
      }

      .list {
        display: flex;
        flex-direction: column;
        border: 1px solid #666;
        margin-top: 2rem;
      }
      .list > .list-item {
        display: flex;
        border-bottom: 1px solid #666;
      }
      .list > .list-item:last-child {
        border-bottom: none;
      }
      .list > .list-item > .list-item-name,
      .list > .list-item > .list-item-value {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        font-size: 1rem;
        text-align: center;
        padding: 8px;
      }
      .list > .list-item > .list-item-name {
        font-weight: 100;
        color: #222;
        border-left: 1px solid #666;
      }
      .list > .list-item > .list-item-value {
        font-weight: 900;
        color: #444;
      }

      .parts {
        display: flex;
        flex-direction: column;
        margin-top: 2em;
        align-items: center;
        font-size: var(--quran-fs);
      }
      .parts > .part {
        display: flex;
        flex-direction: column;
        padding: 0.5em 0.25em 0;
      }
      .parts > .part > .part-text,
      .parts > .part > .part-translation {
        display: flex;
        justify-content: center;
        text-align: center;
        font-weight: 100;
        position: relative;
        overflow: hidden;
        transition: max-height 500ms ease, opacity 300ms ease-in-out;
      }

      .parts > .part > .part-text {
        color: #000;
        margin-bottom: 6px;
      }
      .parts > .part > .part-translation {
        color: var(--mdc-theme-primary, #334);
        padding: 0 5px;
      }
      .parts > .part > .part-translation:before {
        content: '';
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: var(--mdc-theme-primary, #334);
        opacity: 0.15;
        border-radius: 4px;
      }
      .parts > .part > .part-translation {
        max-height: 0;
        opacity: 0;
      }
      .parts > .part.selected > .part-translation {
        max-height: 150px;
        opacity: 1;
      }
    `,r`
      .title.load {
        background-color: #abbbb0 !important;
        color: #abbbb0 !important;
        border-radius: 4px !important;
      }

      .load.list {
        border: none !important;
        margin-top: 1em !important;
      }

      .load .list-item {
        padding: 0.25em !important;
        border: none !important;
      }

      .load .list-item .list-item-name,
      .load .list-item .list-item-value,
      .load .part {
        padding: 0.75em !important;
        margin: 0.25em !important;
        border: none !important;
        background-color: #abbbb0 !important;
        color: #abbbb0 !important;
        border-radius: 4px !important;
      }
      .load .part {
        width: 100%;
        padding: 1em !important;
        margin: 0.35em 0 !important;
      }
    `],l([o()],p.prototype,"_part",void 0),p=l([n("page-quran-part")],p);export{p as PageQuranPart};
