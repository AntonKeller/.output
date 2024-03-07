import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const rating$1 = [
  {
    id: 1,
    year: 2021,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "9" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "15" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433", value: "9" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "1" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: "1" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432", value: "4" },
      {
        title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433\u0438 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 \u043F\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439(\u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0439) \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438: \u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433",
        value: "9"
      }
    ]
  },
  {
    id: 2,
    year: 2020,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "9" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "11" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433", value: "18" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "1" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: "2" },
      {
        title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433\u0438 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 \u043F\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439(\u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0439) \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438: \u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433",
        value: "9"
      }
    ]
  },
  {
    id: 3,
    year: 2019,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "14" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "15" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433", value: "99" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "1" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: "7" },
      {
        title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433\u0438 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 \u043F\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439(\u043E\u043A\u0440\u0443\u0436\u043D\u043E\u0439) \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438: \u0426\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433",
        value: "12"
      }
    ]
  },
  {
    id: 4,
    year: 2018,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "8" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "13" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "1" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: "6" }
    ]
  },
  {
    id: 5,
    year: 2017,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "11" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "21" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "2" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: "3" }
    ]
  },
  {
    id: 6,
    year: 2016,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "13" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "26" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "1" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: "24" }
    ]
  },
  {
    id: 7,
    year: 2015,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "24" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "43" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "2" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: "25" }
    ]
  },
  {
    id: 8,
    year: 2014,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "21" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "59" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "2" },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: "14" }
    ]
  },
  {
    id: 9,
    year: 2013,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "41" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "59" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "7" }
    ]
  },
  {
    id: 10,
    year: 2012,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "44" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "66" },
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 / \u043E\u0446\u0435\u043D\u043A\u0430 \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: "10" }
    ]
  },
  {
    id: 11,
    year: 2011,
    infoByYear: [
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "59" },
      { title: "\u0420\u044D\u043D\u043A\u0438\u043D\u0433 \u0434\u0435\u043B\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u0430 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: "76" }
    ]
  }
];
const _sfc_main = {
  name: "rating",
  head() {
    return {
      title: "\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F / \u0420\u0435\u0439\u0442\u0438\u043D\u0433 - \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
      meta: [
        {
          hid: "description",
          name: "description",
          content: ".........."
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://antonkeller.github.io/ev_nuxtjs_website_page-1/rating"
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      rating: rating$1,
      activeYear: 2021,
      title: {
        descriptions: [
          { id: 1, value: "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u043B\u0438 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0434\u043B\u044F 45 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438\u0437 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 \xAB\u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0438\xBB (\u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u042D\u043A\u0441\u043F\u0435\u0440\u0442-400), \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0437\u0430 2008 \u0433\u043E\u0434 \u043F\u0440\u0435\u0432\u044B\u0441\u0438\u043B\u0430 9.3 \u0442\u0440\u043B\u043D. \u0440\u0443\u0431." },
          { id: 2, value: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0434\u0435\u043B\u043E\u0432\u044B\u043C \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u043F\u044B\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0441 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u043C\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438." },
          { id: 3, value: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Everest Consulting \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u043B\u0435\u043D\u0430\u043C\u0438 \u0442\u0430\u043A\u0438\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439, \u043A\u0430\u043A \u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u0430\u044F \u041C\u0435\u0436\u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F \u041E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (\u0421\u041C\u0410\u041E), \u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0439 \u0441\u043E\u044E\u0437 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 (OSV), \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (ASA)." }
        ]
      }
    };
  },
  mounted() {
  },
  methods: {
    getRatingYears() {
      return this.rating.map((el) => {
        return {
          id: el.id,
          year: el.year
        };
      });
    },
    getInfoByYear(year) {
      var _a;
      return ((_a = this.rating.find((e) => e.year === year)) == null ? void 0 : _a.infoByYear) || null;
    },
    getRatingElements() {
      var _a;
      return ((_a = this.rating.find((e) => e.year === this.activeYear)) == null ? void 0 : _a.infoByYear) || null;
    },
    setActiveYear(id) {
      this.activeYear = id;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))} data-v-de37e785><div class="preview-container" data-v-de37e785><h1 class="rating-preview--title" data-v-de37e785>\u0420\u0435\u0439\u0442\u0438\u043D\u0433\u0438 \u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F</h1><!--[-->`);
  ssrRenderList($data.title.descriptions, (element) => {
    _push(`<p class="rating-preview--description" data-v-de37e785>${ssrInterpolate(element.value)}</p>`);
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_carousel, {
    "items-to-show": 1,
    class: "rating-button-slider",
    autoplay: "6000",
    wrapAround: "true",
    pauseAutoplayOnHover: "true",
    dir: "rtl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($options.getRatingYears(), (e) => {
          _push2(ssrRenderComponent(_component_slide, {
            onClick: ($event) => $options.setActiveYear(e.year),
            key: e.id,
            class: "rating-button-slide"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<span class="block font-extralight text-gray-800" data-v-de37e785${_scopeId2}> &lt; </span><h3 class="block" data-v-de37e785${_scopeId2}>${ssrInterpolate(e.year)}</h3><span class="block font-extralight text-gray-800" data-v-de37e785${_scopeId2}> &gt; </span>`);
              } else {
                return [
                  createVNode("span", { class: "block font-extralight text-gray-800" }, " < "),
                  createVNode("h3", { class: "block" }, toDisplayString(e.year), 1),
                  createVNode("span", { class: "block font-extralight text-gray-800" }, " > ")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($options.getRatingYears(), (e) => {
            return openBlock(), createBlock(_component_slide, {
              onClick: ($event) => $options.setActiveYear(e.year),
              key: e.id,
              class: "rating-button-slide"
            }, {
              default: withCtx(() => [
                createVNode("span", { class: "block font-extralight text-gray-800" }, " < "),
                createVNode("h3", { class: "block" }, toDisplayString(e.year), 1),
                createVNode("span", { class: "block font-extralight text-gray-800" }, " > ")
              ]),
              _: 2
            }, 1032, ["onClick"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_carousel, {
    "items-to-show": 1,
    class: "rating-info-slider",
    autoplay: "6000",
    wrapAround: "true",
    pauseAutoplayOnHover: "true",
    dir: "rtl"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($options.getRatingYears(), (e) => {
          _push2(ssrRenderComponent(_component_slide, {
            onClick: ($event) => $options.setActiveYear(e.year),
            key: e.id,
            class: "rating-button-slide"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<section class="ratingContainer" data-v-de37e785${_scopeId2}><!--[-->`);
                ssrRenderList($options.getInfoByYear(e.year), (description) => {
                  _push3(`<div class="ratingElement animate-show-2" data-v-de37e785${_scopeId2}><div class="flex justify-center bg-gray-200 text-gray-700 items-center text-center w-16 h-16 font-extrabold text-lg md:text-xl lg:text-3xl rounded-t-sm rounded-b-3xl border-4 border-gray-600" data-v-de37e785${_scopeId2}><p data-v-de37e785${_scopeId2}>${ssrInterpolate(description.value)}</p></div><p data-v-de37e785${_scopeId2}>${ssrInterpolate(description.title)}</p></div>`);
                });
                _push3(`<!--]--></section>`);
              } else {
                return [
                  createVNode("section", { class: "ratingContainer" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList($options.getInfoByYear(e.year), (description) => {
                      return openBlock(), createBlock("div", { class: "ratingElement animate-show-2" }, [
                        createVNode("div", { class: "flex justify-center bg-gray-200 text-gray-700 items-center text-center w-16 h-16 font-extrabold text-lg md:text-xl lg:text-3xl rounded-t-sm rounded-b-3xl border-4 border-gray-600" }, [
                          createVNode("p", null, toDisplayString(description.value), 1)
                        ]),
                        createVNode("p", null, toDisplayString(description.title), 1)
                      ]);
                    }), 256))
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
          (openBlock(true), createBlock(Fragment, null, renderList($options.getRatingYears(), (e) => {
            return openBlock(), createBlock(_component_slide, {
              onClick: ($event) => $options.setActiveYear(e.year),
              key: e.id,
              class: "rating-button-slide"
            }, {
              default: withCtx(() => [
                createVNode("section", { class: "ratingContainer" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.getInfoByYear(e.year), (description) => {
                    return openBlock(), createBlock("div", { class: "ratingElement animate-show-2" }, [
                      createVNode("div", { class: "flex justify-center bg-gray-200 text-gray-700 items-center text-center w-16 h-16 font-extrabold text-lg md:text-xl lg:text-3xl rounded-t-sm rounded-b-3xl border-4 border-gray-600" }, [
                        createVNode("p", null, toDisplayString(description.value), 1)
                      ]),
                      createVNode("p", null, toDisplayString(description.title), 1)
                    ]);
                  }), 256))
                ])
              ]),
              _: 2
            }, 1032, ["onClick"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rating = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-de37e785"]]);

export { rating as default };
//# sourceMappingURL=rating-gsqkzwcf.mjs.map
