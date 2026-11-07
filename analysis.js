// ==========================================================================
// 📖 《郑人买履》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "有一个想要买鞋子的" + U_TAG("郑国") + "人，事先自己用尺子量好脚的尺码，然后把尺码放" + OMISSION_TAG("介词", "在") + "自己的座位上。等到" + OMISSION_TAG("主语", "他") + "前往集市时，却忘了带上它（尺码）。" + OMISSION_TAG("主语", "他") + "已经拿到鞋子了，才说道：“我忘了带量好的尺码。”" + OMISSION_TAG("主语", "他") + "便返回家里去拿尺码。等到" + OMISSION_TAG("主语", "他") + "返回" + OMISSION_TAG("宾语", "集市") + "时，集市已经散了，最终没能买到鞋子。旁人问道：“为什么不用您的脚去试穿鞋子呢？”" + OMISSION_TAG("主语", "郑人") + "回答说：“" + OMISSION_TAG("主语", "我") + "宁可相信量好的尺码，也不相信自己的脚啊！”" +
        "</span><br><br>" +
        "<strong>【古代文化常识与阅读提示（课本第96页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《郑人买履》选自先秦法家名著《韩非子·外储说左上》。作者" + U_TAG("韩非") + "（约前280－前233）是" + U_TAG("战国") + "末期" + U_TAG("韩国") + "公子，师从大儒" + U_TAG("荀子") + "，为法家集大成者。当时韩非主张随时代变化而变法革新，反对儒家盲目效法先王陈规，因此创作了这则短小辛辣的寓言，深刻讽刺了那些只信教条尺码、不顾客观实际的墨守成规者。</span>",

    paragraphs: {
        1: "<strong>【逐句白话直译与 UASA 考场采分点对照（上文下译）】</strong>" +
           "<div style='font-size:12.5px; color:var(--wrong-text); background:var(--wrong-bg); border:1px dashed var(--wrong-border); padding:6px 12px; border-radius:6px; margin-top:8px; font-weight:600;'>" +
               "💡 <strong>课文知识重点（课本第96页）：</strong>本篇集中考查四大文言特殊句式——① 定语后置（郑人有欲买履者）；② 省略介词“于”（而置之其坐）；③ 状语后置（何不试之以足）；④ 宾语前置（无自信也）。" +
           "</div>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:12px;'>" +

               // 第 1 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("郑") + "人有[欲]买[履][者]，先自[度]其[足]，[而][置]之" + CARET + "其[坐]。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "有一个[想要]✓买[鞋子]✓[的]✓" + U_TAG("郑国") + "人，事先自己用尺子[测量]✓他的[脚]✓，[然后]✓把尺码[放]✓" + OMISSION_TAG("介词", "于（在）") + "他的[座位上]✓。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("履", "鞋子（名词）", "履行、脚步") +
                       ANCIENT_MODERN_TAG("坐", "通“座”，座位（名词）", "坐下（动词）") +
                       GRAMMAR_TAG("课本句式1：定语后置", "郑人有欲买履者 ＝ 有欲买履之郑人") +
                       GRAMMAR_TAG("课本句式2：省略介词", "置之（于）其坐") +
                       GRAMMAR_TAG("破音字", "度(duó)＝用尺子测量（动词）") +
                   "</div>" +
               "</div>" +

               // 第 2 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[至]" + CARET + "[之][市]，而忘[操][之]。[已]得履，[乃]曰：“吾忘[持][度]。”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[等到]✓" + OMISSION_TAG("主语", "他") + "[前往]✓[集市]✓时，却忘了[带上]✓[它（尺码）]✓。[已经]✓拿到了鞋子，[才/于是]✓说：“我忘了[拿/带]✓[量好的尺码]✓。”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("之（之市）", "到……去、前往（动词）", "的（助词）") +
                       ANCIENT_MODERN_TAG("操", "拿、携带（动词）", "体操、操练") +
                       GRAMMAR_TAG("破音字对比", "持度(dù)＝量好的尺码（名词）") +
                   "</div>" +
               "</div>" +

               // 第 3 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       CARET + "[反][归]取之。[及][反]" + CARET + "，[市罢]，[遂]不得履。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       OMISSION_TAG("主语", "他") + "便[返回]✓[回家]✓去拿尺码。[等到]✓" + OMISSION_TAG("主语", "他") + "[返回]✓" + OMISSION_TAG("宾语", "集市") + "时，[集市已经结束]✓，[最终/于是]✓没能买到鞋子。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("反", "通“返”，返回", "相反、反对") +
                       ANCIENT_MODERN_TAG("罢", "结束、散集", "罢免、算了") +
                   "</div>" +
               "</div>" +

               // 第 4 句对照卡片
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "人曰：“[何不]试[之][以]足？”" + CARET + "曰：“[宁]信[度]，[无][自信]也。”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "旁人问道：“[为什么不]✓[用]✓脚去试穿[鞋子]✓呢？”" + OMISSION_TAG("主语", "郑人") + "回答说：“" + OMISSION_TAG("主语", "我") + "[宁可]✓相信[量好的尺码]✓，也[不]✓[相信自己的脚]✓啊。”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("自信", "相信自己（宾语前置：信自）", "自信心、有把握") +
                       GRAMMAR_TAG("课本句式3：状语后置", "试之以足 ＝ 以足试之（用脚试鞋）") +
                       GRAMMAR_TAG("课本句式4：宾语前置", "无自信也 ＝ 无信自也（否定句代词宾语前置）") +
                   "</div>" +
               "</div>" +

           "</div>"
    }
};
