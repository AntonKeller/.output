globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { useSSRContext, resolveComponent, mergeProps, resolveDirective, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';

const infoBannerContentCards = [
  {
    id: 1,
    title: "\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
    description: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0434\u0435\u043B\u043E\u0432\u044B\u043C \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u043F\u044B\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0441 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u043C\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438. \u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433 \u0438\u043C\u0435\u0435\u0442 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044E \u043D\u0430 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439, \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0445 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u0442\u0430\u0439\u043D\u0443 \u0413\u0422 0103356."
  },
  {
    id: 2,
    title: "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B",
    description: '\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u043B\u0435\u043D\u0430\u043C\u0438 \u0442\u0430\u043A\u0438\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439, \u043A\u0430\u043A \u0421\u041C\u0410\u041E, \u0420\u041E\u041E, \u041D\u041F \u0421\u0420\u041E "\u0414\u0421\u041E", \u041C\u0421\u041D\u041E-\u041D\u041F "\u041E\u041F\u042D\u041E", \u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0439 \u0441\u043E\u044E\u0437 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 (OSV), \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0438 \u0430\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0430\u0446\u0438\u044E \u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (ASA)'
  },
  {
    id: 3,
    title: "\u0426\u0435\u043B\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
    description: "\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2013 \u043E\u043A\u0430\u0437\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 (\u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E, \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u043E\u0433\u043E, \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0433\u043E \u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E) \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u043C\u0438 \u0438 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043A\u0430\u043A \u0432 \u0420\u043E\u0441\u0441\u0438\u0438, \u0442\u0430\u043A \u0438 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u043E\u043C."
  }
];
function getTabloidSlides() {
  return [
    {
      id: 1,
      title: "80+",
      subtitle: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    },
    {
      id: 2,
      title: "5",
      subtitle: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    },
    {
      id: 3,
      title: "15",
      subtitle: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    },
    {
      id: 4,
      title: "10",
      subtitle: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    },
    {
      id: 5,
      title: "12",
      subtitle: "Lorem ipsum dolor",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
    }
  ];
}
const _sfc_main$5 = {
  name: "ev-tabloid",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data: () => ({
    p640: true,
    p1024: true,
    m1024: true,
    windowWidth: 0
  }),
  methods: {
    getSlides: () => getTabloidSlides()
  },
  created() {
    const onResize = () => {
      this.width = (void 0).innerWidth;
      this.p640 = (void 0).innerWidth <= 640;
      this.p1024 = (void 0).innerWidth > 640 && (void 0).innerWidth <= 1024;
      this.m1024 = (void 0).innerWidth > 1024;
    };
    onResize();
    (void 0).addEventListener("resize", onResize);
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-8ec3cfbe>`);
  _push(ssrRenderComponent(_component_carousel, {
    "items-to-show": 2.3,
    class: ["tabloid", { hidden: !_ctx.m1024 }],
    transition: "100",
    autoplay: "4000",
    wrapAround: "",
    mouseDrag: "",
    pauseAutoplayOnHover: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($options.getSlides(), (slide) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: slide.id,
            class: "w-fit"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="slide-content w-fit" data-v-8ec3cfbe${_scopeId2}><div class="slide-content--wrapper w-fit" data-v-8ec3cfbe${_scopeId2}><div class="slide-mark" data-v-8ec3cfbe${_scopeId2}>everest</div><div class="tabloid--title" data-v-8ec3cfbe${_scopeId2}>${ssrInterpolate(slide.title)}</div><div class="tabloid--subtitle" data-v-8ec3cfbe${_scopeId2}>${ssrInterpolate(slide.subtitle)}</div><div class="tabloid--description" data-v-8ec3cfbe${_scopeId2}>${ssrInterpolate(slide.text)}</div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "slide-content w-fit" }, [
                    createVNode("div", { class: "slide-content--wrapper w-fit" }, [
                      createVNode("div", { class: "slide-mark" }, "everest"),
                      createVNode("div", { class: "tabloid--title" }, toDisplayString(slide.title), 1),
                      createVNode("div", { class: "tabloid--subtitle" }, toDisplayString(slide.subtitle), 1),
                      createVNode("div", { class: "tabloid--description" }, toDisplayString(slide.text), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($options.getSlides(), (slide) => {
            return openBlock(), createBlock(_component_slide, {
              key: slide.id,
              class: "w-fit"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "slide-content w-fit" }, [
                  createVNode("div", { class: "slide-content--wrapper w-fit" }, [
                    createVNode("div", { class: "slide-mark" }, "everest"),
                    createVNode("div", { class: "tabloid--title" }, toDisplayString(slide.title), 1),
                    createVNode("div", { class: "tabloid--subtitle" }, toDisplayString(slide.subtitle), 1),
                    createVNode("div", { class: "tabloid--description" }, toDisplayString(slide.text), 1)
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ev-tabloid.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const evTabloid = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-8ec3cfbe"]]);
const _sfc_main$4 = {
  name: "ev-banner-section",
  components: {
    evTabloid
  },
  data() {
    return {
      serviceList: [
        {
          id: 1,
          txt: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430",
          // classes: "z-30 bg-red-800/55  md:hover:bg-red-800/70",
          classes: ""
        },
        {
          id: 2,
          txt: "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433",
          // classes: "z-20 bg-cyan-800/55  md:hover:bg-cyan-800/70",
          classes: ""
        },
        {
          id: 3,
          txt: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433",
          // classes: "z-10 bg-emerald-800/55  md:hover:bg-emerald-800/70",
          classes: ""
        }
      ],
      infoBannerContentCards
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_motion = resolveDirective("motion");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner-container" }, _attrs))} data-v-cbe47cd9><div class="z-10 flex flex-col items-center" data-v-cbe47cd9><div class="flex flex-col md:flex-row items-center space-y-1.5" data-v-cbe47cd9><div${ssrRenderAttrs(mergeProps({
    class: "banner-title txt-shadow",
    initial: { y: 15, opacity: 1e-3 },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        mass: 0.5
      }
    },
    delay: 1e3
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-cbe47cd9> \u042D\u0432\u0435\u0440\u0435\u0441\u0442 </div><div${ssrRenderAttrs(mergeProps({
    class: "banner-subtitle txt-shadow self-end ml-2",
    initial: { y: -15, opacity: 1e-3 },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        mass: 0.5
      }
    },
    delay: 1e3
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-cbe47cd9> \u041D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0441 2010 \u0433\u043E\u0434\u0430 </div></div><div class="flex justify-center items-center mt-6 sm:mt-8 lg:mt-10 xl:mt-12 gap-y-1.5 sm:gap-y-2 sm:gap-2 flex-wrap" data-v-cbe47cd9><!--[-->`);
  ssrRenderList($data.serviceList, (service) => {
    _push(`<div class="${ssrRenderClass([service.classes, "b-btn"])}" data-v-cbe47cd9>${ssrInterpolate(service.txt)} <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold" data-v-cbe47cd9></i></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ev-banner-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const evBannerSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-cbe47cd9"]]);
const companies = [
  {
    id: 1,
    img: "inter-rao",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430", cssClasses: "bg-red-700" },
      { id: 2, title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432", cssClasses: "bg-cyan-700" }
    ]
  },
  {
    id: 2,
    img: "rosatom",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430", cssClasses: "bg-red-700" },
      { id: 2, title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432", cssClasses: "bg-cyan-700" }
    ]
  },
  {
    id: 3,
    img: "moskowkiy-bank",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 4,
    img: "rosekim-bank",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 5,
    img: "rosselhoz-bank",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 6,
    img: "afk-systema",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 7,
    img: "web-rf",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 8,
    img: "sber",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 9,
    img: "mkb",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 10,
    img: "novikom-bank",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 11,
    img: "pcb",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u0434\u0437\u043E\u0440", cssClasses: "bg-fuchsia-700" }
    ]
  },
  {
    id: 12,
    img: "otkritie-bank",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 13,
    img: "cb-rf",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 14,
    img: "almaz-antay",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 15,
    img: "turizm-rf",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 16,
    img: "frp",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 17,
    img: "rosteh",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  }
];
const _sfc_main$3 = {
  name: "ev-experience-section",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  methods: {
    // getDocImg() {
    //   return new URL(`/assets/images/documents.png`, globalThis._importMeta_.url).href
    // },
    //
    // getImageURL(name) {
    //   return new URL(`/assets/experience_logotypes/${name}.png`, globalThis._importMeta_.url).href
    // }
  },
  data() {
    return {
      companies,
      chips: [
        { text: "\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u043E\u043F\u044B\u0442", theme: "" },
        { text: "\u041E\u0446\u0435\u043D\u043A\u0430", theme: "dark" },
        { text: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430", theme: "" },
        { text: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432", theme: "dark" },
        { text: "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E-\u0442\u0443\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u0434\u0437\u043E\u0440", theme: "dark" },
        { text: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", theme: "" },
        { text: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", theme: "" }
      ],
      cards: [
        {
          id: 1,
          text: "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u043B\u0438 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0434\u043B\u044F 45 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438\u0437 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 \xAB\u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0438\xBB (\u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u042D\u043A\u0441\u043F\u0435\u0440\u0442-400), \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0437\u0430 2008 \u0433\u043E\u0434 \u043F\u0440\u0435\u0432\u044B\u0441\u0438\u043B\u0430 9.3 \u0442\u0440\u043B\u043D. \u0440\u0443\u0431."
        },
        {
          id: 2,
          text: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0434\u0435\u043B\u043E\u0432\u044B\u043C \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u043F\u044B\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0441 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u043C\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438."
        },
        {
          id: 2,
          text: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 EverestConsulting \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u043B\u0435\u043D\u0430\u043C\u0438 \u0442\u0430\u043A\u0438\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439, \u043A\u0430\u043A \u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u0430\u044F \u041C\u0435\u0436\u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F \u041E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (\u0421\u041C\u0410\u041E), \u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0439 \u0441\u043E\u044E\u0437 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 (OSV), \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432(ASA)."
        }
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  const _component_Pagination = resolveComponent("Pagination");
  const _directive_motion = resolveDirective("motion");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "experience-container" }, _attrs))} data-v-9af72c0f><div class="content-wrapper" data-v-9af72c0f><div class="text-container" data-v-9af72c0f><div${ssrRenderAttrs(mergeProps({
    class: "text-gray-100 px-2.5 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold py-2 px-4 bg-gray-800 rounded-2xl max-w-fit",
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 250
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-9af72c0f>\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 </div><div${ssrRenderAttrs(mergeProps({
    class: "ml-2.5 text-base lg:text-lg border-b-2 border-b-gray-800/10 pb-3.5 mt-3.5 font-bold font-sans",
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 450
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-9af72c0f>We\u2019re a dynamic group of individuals who are passionate about what we... </div><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 450
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-9af72c0f><p class="ml-2.5 mt-6 font-sans" data-v-9af72c0f> \u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u043B\u0438 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0434\u043B\u044F 45 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438\u0437 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 \xAB\u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0438\xBB (\u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u042D\u043A\u0441\u043F\u0435\u0440\u0442-400), \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0437\u0430 2008 \u0433\u043E\u0434 \u043F\u0440\u0435\u0432\u044B\u0441\u0438\u043B\u0430 9.3 \u0442\u0440\u043B\u043D. \u0440\u0443\u0431. </p></div><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 650
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-9af72c0f><p class="text-gray-50 bg-red-950/80 rounded ml-2 p-3 mt-6 font-sans" data-v-9af72c0f> \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0434\u0435\u043B\u043E\u0432\u044B\u043C \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u043F\u044B\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0441 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u043C\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438. </p></div><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 850
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-9af72c0f><p class="ml-2.5 mt-4" data-v-9af72c0f> \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 EverestConsulting \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u043B\u0435\u043D\u0430\u043C\u0438 \u0442\u0430\u043A\u0438\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439, \u043A\u0430\u043A \u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u0430\u044F \u041C\u0435\u0436\u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F \u041E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (\u0421\u041C\u0410\u041E), \u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0439 \u0441\u043E\u044E\u0437 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 (OSV), \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432(ASA). </p></div></div><div${ssrRenderAttrs(mergeProps({
    class: "md:hidden text-gray-600 px-2 text-lg font-bold py-1 px-4 bg-gray-300 rounded-3xl max-w-full",
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 250
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-9af72c0f>\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 </div><div class="md:hidden bg-gray-200/75 rounded-2xl p-4 mt-3.5" data-v-9af72c0f>`);
  _push(ssrRenderComponent(_component_carousel, mergeProps({
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 250,
    "items-to-show": 1,
    autoplay: "4000",
    wrapAround: "true",
    mouseDrag: "true",
    pauseAutoplayOnHover: "true"
  }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.cards, (card) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: card.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<p class="text-gray-600" data-v-9af72c0f${_scopeId2}>${ssrInterpolate(card.text)}</p>`);
              } else {
                return [
                  createVNode("p", { class: "text-gray-600" }, toDisplayString(card.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.cards, (card) => {
            return openBlock(), createBlock(_component_slide, {
              key: card.id
            }, {
              default: withCtx(() => [
                createVNode("p", { class: "text-gray-600" }, toDisplayString(card.text), 1)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ev-experience-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const evExperienceSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-9af72c0f"]]);
const _sfc_main$2 = {
  name: "ev-customers-section",
  data: () => ({
    companies,
    selectedGroups: {
      "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442": null,
      "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430": null
    }
  }),
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  methods: {
    isSelected(name) {
      return this.selectedGroups.hasOwnProperty(name) || false;
    },
    unselect(name) {
      let obj = {};
      Object.keys(this.selectedGroups).forEach((key) => {
        if (name === key)
          return;
        obj[key] = null;
      });
      this.selectedGroups = obj;
    },
    chipCLick(name) {
      let status = this.isSelected(name);
      console.log("status:", status);
      console.log("arr size:", Object.keys(this.selectedGroups).length);
      if (!status) {
        this.selectedGroups[name] = null;
      } else {
        this.unselect(name);
      }
    },
    getGroups() {
      let groups = {};
      this.companies.forEach((company) => {
        company.services.forEach((group) => {
          groups[group.title] = group;
        });
      });
      return Object.keys(groups).map((groupTitle, i) => ({ name: groupTitle, id: i + 1 }));
    },
    getCompaniesLogo() {
      const logotypeImageNames = [];
      this.companies.forEach((company) => {
        let isExclude = company.services.find((group) => {
          return this.selectedGroups.hasOwnProperty(group.title);
        });
        if (isExclude)
          return;
        logotypeImageNames.push(company.img);
      });
      return logotypeImageNames.map((e, i) => ({ id: i + 1, img: e }));
    }
    // getImageURL: (name) => new URL(`../../assets/experience_logotypes/${name}.png`, globalThis._importMeta_.url).href
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  const _component_Navigation = resolveComponent("Navigation");
  const _directive_motion = resolveDirective("motion");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "customers-container" }, _attrs))} data-v-1c8d46cb><div class="customers-sub-container" data-v-1c8d46cb><div${ssrRenderAttrs(mergeProps({
    class: "customer-title",
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 250
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-1c8d46cb>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u043B\u0438\u0434\u0435\u0440\u0430\u043C\u0438 \u0440\u044B\u043D\u043A\u0430 </div><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    class: "chips",
    delay: 450
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-1c8d46cb><!--[-->`);
  ssrRenderList($options.getGroups(), (group) => {
    _push(`<div class="${ssrRenderClass({ "chip": !$options.isSelected(group.name), "chip-active": $options.isSelected(group.name) })}" data-v-1c8d46cb>${ssrInterpolate(group.name)}</div>`);
  });
  _push(`<!--]--></div><div class="logotype-images-wrapper" data-v-1c8d46cb><!--[-->`);
  ssrRenderList($options.getCompaniesLogo(), (companyLogo) => {
    _push(`<img${ssrRenderAttrs(mergeProps({
      key: companyLogo.id,
      src: `/assets/experience_logotypes/${companyLogo.img}.png`,
      class: "logotype-img",
      alt: "err",
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      delay: 30 * companyLogo.id
    }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-1c8d46cb>`);
  });
  _push(`<!--]--></div></div>`);
  _push(ssrRenderComponent(_component_carousel, mergeProps({
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 250,
    "items-to-show": 1,
    class: "slider sm:hidden min-h-[128px]",
    transition: "100",
    autoplay: "4000",
    wrapAround: "",
    mouseDrag: "",
    pauseAutoplayOnHover: ""
  }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Navigation, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Navigation)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($options.getCompaniesLogo(), (companyLogo) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: companyLogo.id,
            class: "slide"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img class="slide-img"${ssrRenderAttr("src", `/assets/experience_logotypes/${companyLogo.img}.png`)} alt="err" data-v-1c8d46cb${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "slide-img",
                    src: `/assets/experience_logotypes/${companyLogo.img}.png`,
                    alt: "err"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($options.getCompaniesLogo(), (companyLogo) => {
            return openBlock(), createBlock(_component_slide, {
              key: companyLogo.id,
              class: "slide"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  class: "slide-img",
                  src: `/assets/experience_logotypes/${companyLogo.img}.png`,
                  alt: "err"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_carousel, mergeProps({
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 250,
    "items-to-show": 3,
    class: "slider hidden sm:block md:hidden min-h-[128px]",
    autoplay: "4000",
    wrapAround: "",
    mouseDrag: "",
    pauseAutoplayOnHover: ""
  }, ssrGetDirectiveProps(_ctx, _directive_motion)), {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Navigation, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Navigation)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($options.getCompaniesLogo(), (companyLogo) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: companyLogo.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img class="slide-img"${ssrRenderAttr("src", `/assets/experience_logotypes/${companyLogo.img}.png`)} alt="err" data-v-1c8d46cb${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "slide-img",
                    src: `/assets/experience_logotypes/${companyLogo.img}.png`,
                    alt: "err"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($options.getCompaniesLogo(), (companyLogo) => {
            return openBlock(), createBlock(_component_slide, {
              key: companyLogo.id
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  class: "slide-img",
                  src: `/assets/experience_logotypes/${companyLogo.img}.png`,
                  alt: "err"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ev-customers-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const evCustomersSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1c8d46cb"]]);
const employees = [
  {
    id: 1,
    img: "avatar-1",
    fullName: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0413\u0435\u043D\u0430\u0434\u0438\u0439 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447",
    post: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
    area: "Moskow"
  },
  {
    id: 2,
    img: "avatar-2",
    fullName: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0413\u0435\u043D\u0430\u0434\u0438\u0439 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447",
    post: "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
    area: "Moskow"
  },
  {
    id: 3,
    img: "avatar-3",
    fullName: "\u0418\u0432\u0430\u043D\u043E\u0432 \u0413\u0435\u043D\u0430\u0434\u0438\u0439 \u0412\u0438\u043A\u0442\u043E\u0440\u043E\u0432\u0438\u0447",
    post: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E",
    area: "Moskow"
  }
  // {
  //   id: 4,
  //   img: "avatar-1",
  //   fullName: "Иванов Генадий Викторович",
  //   post: "Финансовый директор",
  //   area: "Moskow",
  // },
  // {
  //   id: 5,
  //   img: "avatar-3",
  //   fullName: "Иванов Генадий Викторович",
  //   post: "Финансовый директор",
  //   area: "Moskow",
  // },
];
const _sfc_main$1 = {
  name: "ev-managers",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      employees
    };
  },
  methods: {
    getImageURL: (name) => new URL(`../../assets/avatars/${name}.png`, globalThis._importMeta_.url).href
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "managers-section" }, _attrs))} data-v-35d76f9c><div class="manager-section-title" data-v-35d76f9c><h2 class="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold" data-v-35d76f9c> \u0421\u043E\u0441\u0442\u0430\u0432 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u043E\u0432 </h2><p class="text-lg font-light" data-v-35d76f9c> We\u2019re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients. </p></div><div class="cards" data-v-35d76f9c><!--[-->`);
  ssrRenderList($data.employees, (employee) => {
    _push(`<div class="card" data-v-35d76f9c><img class="manager-ava blur"${ssrRenderAttr("src", `/assets/avatars/${employee.img}.png`)} alt="no img" data-v-35d76f9c><div class="card-description" data-v-35d76f9c><span class="text-gray-700 inline-block font-bold" data-v-35d76f9c>${ssrInterpolate(employee.fullName)}</span><span class="text-red-700 inline-block font-medium" data-v-35d76f9c>${ssrInterpolate(employee.post)}</span><span class="text-gray-500 inline-block font-light" data-v-35d76f9c>${ssrInterpolate(employee.area)}</span></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ev-manager-section.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const evManagerSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-35d76f9c"]]);
const _sfc_main = {
  name: "IndexPage",
  components: {
    evBannerSection,
    evExperienceSection,
    evCustomersSection,
    evManagerSection
    // evFooter,
  },
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_evBannerSection = resolveComponent("evBannerSection");
  const _component_evExperienceSection = resolveComponent("evExperienceSection");
  const _component_evCustomersSection = resolveComponent("evCustomersSection");
  const _component_evManagerSection = resolveComponent("evManagerSection");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "scroll-hidden bg-gray-50 px-2 pt-2 md:px-4 md:pt-3.5 pb-4 md:pb-6" }, _attrs))} data-v-da677320>`);
  _push(ssrRenderComponent(_component_evBannerSection, null, null, _parent));
  _push(ssrRenderComponent(_component_evExperienceSection, null, null, _parent));
  _push(ssrRenderComponent(_component_evCustomersSection, null, null, _parent));
  _push(ssrRenderComponent(_component_evManagerSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-da677320"]]);

export { index as default };
//# sourceMappingURL=index-e9JbAcyq.mjs.map
