globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  name: "ev-footer",
  methods: {
    getImageURL: (name) => new URL(name, globalThis._importMeta_.url).href
  },
  data: () => ({
    base: [
      { img: "../../assets/icons/phone-icon.png", content: "8 (495) 717-01-01" },
      { img: "../../assets/icons/email-icon.png", content: "info@evcons.ru" },
      { img: "../../assets/icons/address-icon.png", content: "\u041C\u043E\u0441\u043A\u0432\u0430, 3-\u044F \u0443\u043B\u0438\u0446\u0430 \u042F\u043C\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u044F, \u0434 2 \u043A 7, \u043E\u0444\u0438\u0441 301" },
      { img: "../../assets/logotypes/ev-logotype-4-gray.png", content: "Copyright \xA9 2023, \u041E\u041E\u041E \u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u0433" }
    ]
  })
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-container" }, _attrs))} data-v-feab19a7><div class="element" data-v-feab19a7><div data-v-feab19a7>8 (495) 717-01-01</div><img class="w-[14px] h-[14px]"${ssrRenderAttr("src", $options.getImageURL("../../assets/icons/phone-icon.png"))} alt="no img" data-v-feab19a7></div><div class="element" data-v-feab19a7><div data-v-feab19a7>info@evcons.ru</div><img class="w-[14px] h-[14px]"${ssrRenderAttr("src", $options.getImageURL("../../assets/icons/email-icon.png"))} alt="no img" data-v-feab19a7></div><div class="element" data-v-feab19a7><div data-v-feab19a7>\u041C\u043E\u0441\u043A\u0432\u0430, 3-\u044F \u0443\u043B\u0438\u0446\u0430 \u042F\u043C\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u044F, \u0434 2 \u043A 7, \u043E\u0444\u0438\u0441 301</div><img class="w-[14px] h-[14px]"${ssrRenderAttr("src", $options.getImageURL("../../assets/icons/address-icon.png"))} alt="no img" data-v-feab19a7></div><div class="element" data-v-feab19a7><img class="opacity-75 w-[36px] h-[28px]"${ssrRenderAttr("src", $options.getImageURL("../../assets/logotypes/ev-logotype-4-gray.png"))} alt="no img" data-v-feab19a7><div data-v-feab19a7>\xA9 2024, \u041E\u041E\u041E \u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u0433</div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/ev-footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const evFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-feab19a7"]]);

export { evFooter as e };
//# sourceMappingURL=ev-footer-_FXEWhEg.mjs.map
