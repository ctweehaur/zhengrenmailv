// ==========================================================================
// 📝 《郑人买履》综合练习题库 (questions.js) - 马来西亚 UASA & 课本原题版
// ==========================================================================

const U = (text) => `<span class="proper-noun">${text}</span>`;
const PT = (pts) => `<span style="display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; font-weight:800; padding:0 5px; margin:0 3px; border-radius:4px;">[${pts}分]</span>`;
const KW = (text) => `<span style="background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.3); padding:0 4px; border-radius:4px; font-weight:800;">[${text}]✓</span>`;
const HL = (text) => `<u style="text-decoration:underline; text-decoration-thickness:2px; text-underline-offset:4px; color:var(--primary-color); font-weight:800;">${text}</u>`;

// ==========================================================================
// 甲组：客观选择题（10分，每题四选项字数与句式 100% 严格一致）
// ==========================================================================
const quizDataList = [
    {
        id: 1,
        question: `在第1段“${U("郑")}人有欲买履者，先自度其足”中，“履”与“度”的正确读音和意思是？`,
        options: [
            "A 鞋子；读 duó，用尺测量", // 13字
            "B 草帽；读 dù，量好尺码",  // 13字
            "C 布匹；读 duó，心里揣测", // 13字
            "D 袜子；读 dù，迈步走过"   // 13字
        ],
        answer: "A",
        teacherAnalysis: "【课本注释题：破音字与实词】详见第1段及课本第95页注释1。“履（lǚ）”指鞋子；第一个“度”作动词，读作 duó，意为“用尺子衡量、测量”。"
    },
    {
        id: 2,
        question: "在第1段“而置之其坐”与“反归取之”中，包含哪两个通假字？",
        options: [
            "A “置”通“值”；“归”通“规”", // 15字
            "B “而”通“尔”；“取”通“娶”", // 15字
            "C “坐”通“座”；“反”通“返”", // 15字
            "D “之”通“知”；“其”通“期”"  // 15字
        ],
        answer: "C",
        teacherAnalysis: "【课本注释题：通假字辨析】详见第1段及课本第95页注释4、11。“坐”同“座”（座位）；“反”通“返”（返回）。"
    },
    {
        id: 3,
        question: "在第1段“至之市，而忘操之”中，两个“之”字和“操”字的意思分别是什么？",
        options: [
            "A 的；鞋子；用手试穿", // 10字
            "B 前往；尺码；拿、带", // 10字
            "C 到达；座位；做体操", // 10字
            "D 他；集市；焦急寻找"  // 10字
        ],
        answer: "B",
        teacherAnalysis: "【课本注释题：一词多义辨析】详见第1段及课本第95页注释5、6。“至之市”的“之”是动词，意为“到……去、前往”；“操”意为“拿、携带”；“忘操之”的“之”是代词，指代量好的尺码。"
    },
    {
        id: 4,
        question: "在第1段“何不试之以足？”与“而置之其坐”中，两个“之”字分别指代什么？（课本第96页第2题）",
        options: [
            "A 均指代量好的尺码", // 9字
            "B 均指代集市的鞋子", // 9字
            "C 前指尺码，后指鞋", // 9字
            "D 前指鞋，后指尺码"  // 9字
        ],
        answer: "D",
        teacherAnalysis: "【课本原题：代词指代辨析】对应课本第96页第2(a)题。“何不试之以足”意为为什么不用脚试穿鞋子，“之”指代鞋子（履）；“而置之其坐”意为把尺码放在座位上，“之”指代量好的尺码（度）。"
    },
    {
        id: 5,
        question: `在第1段中，${U("郑")}人“已得履”，为什么最终却“遂不得履”（没买到鞋子）？`,
        options: [
            "A 忘带买鞋的钱财，回家拿钱后鞋已卖光。", // 19字
            "B 忘带量好的尺码，回家取回时集市已散。", // 19字
            "C 集市鞋码太狭小，没有一双适合他的脚。", // 19字
            "D 途中弄丢了尺码，留在家里重新量双脚。"  // 19字
        ],
        answer: "B",
        teacherAnalysis: "【课本原题：因果理解题】详见第1段。郑人已经拿到了鞋子，却发现忘了带量好的尺码（“吾忘持度”），不肯直接用脚试穿，非要跑回家去拿尺码；等返回时集市已经结束（“及反，市罢”），最终没买成。"
    },
    {
        id: 6,
        question: "根据课本第96页“课文知识”，下列关于《郑人买履》特殊文言句式的分析，哪一项是正确的？",
        options: [
            "A “郑人有欲买履者”属于判断句式。", // 17字
            "B “而置之其坐”省略了主语“尺码”。", // 17字
            "C “郑人有欲买履者”是定语后置句。", // 17字
            "D “及反，市罢”属于宾语前置句式。"  // 17字
        ],
        answer: "C",
        teacherAnalysis: "【课本课文知识题：特殊句式】详见课本第96页“课文知识”。“郑人有欲买履者”属于定语后置句式（正常语序为“有欲买履之郑人”）；“而置之其坐”省略的是介词“于”（而置之于其坐），而非主语“尺码”。"
    },
    {
        id: 7,
        question: "在第1段末尾“宁信度，无自信也”中，“度”与古今异义词“自信”的正确意思是？",
        options: [
            "A 揣度；对自己充满信心", // 11字
            "B 尺码；相信自己的双脚", // 11字
            "C 制度；自己写信给店家", // 11字
            "D 气度；独自一人去相信"  // 11字
        ],
        answer: "B",
        teacherAnalysis: "【课本注释题：古今异义与宾语前置】详见课本第95页注释10、15。“度（dù）”指量好的尺码；“自信”是宾语前置结构（信自），古义为“相信自己（的脚）”，不同于现代汉语的“自信心”。"
    },
    {
        id: 8,
        question: `综合第1段全文，文中那个买鞋的${U("郑")}人有哪些可笑的举动或想法？<br><span style='font-weight:500; font-size:14px; display:inline-block; margin-top:6px; line-height:1.7;'>I 买鞋前先在家用尺子量好脚的尺码，放在座位上<br>II 出门去集市时粗心大意，忘了把量好的尺码带上<br>III 已经拿到鞋子却不肯用脚试穿，非要跑回家拿尺码<br>IV 认为自己的双脚随时会变大变小，绝对不可相信</span>`,
        options: [
            "A I、II 和 III",
            "B I、II 和 IV",
            "C I、III 和 IV",
            "D II、III 和 IV"
        ],
        answer: "A",
        teacherAnalysis: "【多项组合选择题】郑人先量脚置坐（I）、至市忘操（II）、已得履却反归取度而不肯以足试之（III）；他“宁信度，无自信也”是盲目迷信教条尺码，并未说“双脚随时会变大变小”（排除 IV）。"
    },
    {
        id: 9,
        question: "关于《郑人买履》的作者与出处常识，以下说明都是正确的，<strong>除了</strong>",
        options: [
            "A 本文选自先秦名著《韩非子》。", // 15字
            "B 作者韩非是战国末期韩国公子。", // 15字
            "C 韩非曾师从儒家代表人物荀子。", // 15字
            "D 韩非是中国道家学派的创始人。"  // 15字
        ],
        answer: "D",
        teacherAnalysis: "【课本作者简介题】详见课本第96页作者简介。韩非是战国末期韩国公子，师从荀子，是中国古代法家思想的代表人物（道家创始人是老子），故 D 项错误。"
    },
    {
        id: 10,
        question: "哪项准确概括了《郑人买履》这则寓言故事最核心的主旨？（课本第96页第4题）",
        options: [
            "A 告诫人们出门赶集必须检查随身物品。", // 18字
            "B 批评古代集市营业时间太短不便百姓。", // 18字
            "C 讽刺墨守成规、迷信教条而不懂变通。", // 18字
            "D 赞美郑国人做事严谨、讲究精确数据。"  // 18字
        ],
        answer: "C",
        teacherAnalysis: "【课本题解与原题：中心思想主旨题】对应课本第96页题解与第4题。文章通过郑人只信尺码不信自己双脚、最终买不到鞋子的笑话，深刻讽刺了那些固执呆板、墨守成规、迷信教条而不知变通的人。"
    }
];

// ==========================================================================
// 乙组：主观简答题（15分制，融合课本第96页原题 & UASA 翻译评分折算尺）
// ==========================================================================
const essayDataList = [
    {
        id: 1,
        question: `（一）根据文章内容，简要列出这则寓言故事中的<strong>人物、地点、事情起因、经过和结果</strong>（课本第96页第1题）。 <span style="color:var(--primary-color);">[5分]</span>`,
        sampleAnswer: `① <strong>人物</strong>：买鞋的${U("郑")}国人、旁人${PT(1)}；<br>` +
                      `② <strong>地点</strong>：${U("郑")}人家里、集市（市）${PT(1)}；<br>` +
                      `③ <strong>起因</strong>：${U("郑")}人想买鞋，事先在家量好脚的尺码放在座位上，去集市时却忘了带尺码${PT(1)}；<br>` +
                      `④ <strong>经过</strong>：他在集市已经选到了鞋子，却因忘带尺码而不敢买，赶回家去取尺码${PT(1)}；<br>` +
                      `⑤ <strong>结果</strong>：等他赶回集市时已经散集，最终没买到鞋，还说出“宁可相信尺码也不相信自己”的荒唐话${PT(1)}。`,
        teacherAnalysis: "<strong>【课本原题：记叙要素梳理题】</strong>对应课本第96页第1题（树型图）。按人物、地点、起因、经过、结果五个要素用现代白话完整作答（每项1分）。"
    },
    {
        id: 2,
        question: `（二）详细阅读文章，回答下列词义辨析问题（课本第96页第2题）： <span style="color:var(--primary-color);">[4分]</span><br>` +
                  `<div style="font-weight:500; margin-top:6px; line-height:1.85;">` +
                  `(a) 写出句中代词“${HL("之")}”和“${HL("其")}”分别代指什么：<br>` +
                  `&nbsp;&nbsp;&nbsp;&nbsp;(i) 而置${HL("之")}${HL("其")}坐 &nbsp;&nbsp;&nbsp;&nbsp; (ii) 何不试${HL("之")}以足？<br>` +
                  `(b) “${HL("度")}”在这篇文章中是一词多义，写出它在下列句中的读音与含义：<br>` +
                  `&nbsp;&nbsp;&nbsp;&nbsp;(i) 先自${HL("度")}其足 &nbsp;&nbsp;&nbsp;&nbsp; (ii) 吾忘持${HL("度")} / 宁信${HL("度")}` +
                  `</div>`,
        sampleAnswer: `(a) (i) “<strong>之</strong>”代指<strong>量好的尺码（度）</strong>，“<strong>其</strong>”代指<strong>${U("郑")}人自己的（他的）</strong>${PT(1)}；<br>` +
                      `&nbsp;&nbsp;&nbsp;&nbsp;(ii) “<strong>之</strong>”代指<strong>鞋子（履）</strong>${PT(1)}。<br>` +
                      `(b) (i) 读 <strong>duó</strong>，动词，意为<strong>用尺子衡量（测量）</strong>${PT(1)}；<br>` +
                      `&nbsp;&nbsp;&nbsp;&nbsp;(ii) 读 <strong>dù</strong>，名词，意为<strong>量好的尺码</strong>${PT(1)}。`,
        teacherAnalysis: "<strong>【课本原题：代词指代与一词多义辨析】</strong>完全对应课本第96页第2题(a)(b)。"
    },
    {
        id: 3,
        question: `（三）试说出《郑人买履》这则寓言故事的主旨。在现实学习或生活中，我们应该如何避免犯像${U("郑")}人一样的错误？（课本第96页第4题）<span style="background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-left:4px;">KBAT</span> <span style="color:var(--primary-color);">[3分]</span>`,
        sampleAnswer: `这则故事通过${U("郑")}人只信尺码、不信自己双脚而买不到鞋子的笑话，<strong>讽刺了那些因循守旧、墨守成规、迷信教条而不懂得根据客观实际灵活变通的人</strong>${PT(2)}。<br>在日常生活中，我们学习书本知识或制定计划时，不能死搬硬套，而应从实际情况出发，遇到变化时学会独立思考、灵活变通${PT(1)}。`,
        teacherAnalysis: "<strong>【课本原题：主旨归纳与 KBAT 迁移题】</strong>对应课本第96页第4题。点出讽刺墨守成规的主旨（2分）+ 联系实际谈灵活变通（1分）。"
    },
    {
        id: 4,
        question: `（四）将下列文言句子译成现代汉语（课本第96页第3题）： <span style="color:var(--primary-color);">[3分]</span><br>` +
                  `<div style="font-family:'KaiTi',serif; font-size:17px; margin-top:4px; line-height:1.8;">` +
                  `a. [及][反]，[市罢]，[遂]不得[履]。<br>` +
                  `b. [宁]信[度]，无[自信]也。` +
                  `</div>`,
        sampleAnswer: `a. ${KW("等到")}他${KW("返回")}集市时，${KW("集市已经结束/散了")}，${KW("最终/于是")}没能买到${KW("鞋子")}。<br>` +
                      `b. （我）${KW("宁可")}相信${KW("量好的尺码")}，也不${KW("相信自己的脚")}啊。<br>` +
                      `<div style="margin-top:8px; padding:6px 10px; background:var(--card-bg); border:1px dashed var(--input-border); border-radius:6px; font-size:12.5px; color:var(--text-muted);">` +
                      `📊 <strong>UASA 翻译评分折算表（共 8 个采分点）：</strong><br>` +
                      `✓ 1–2 个 ＝ <strong>1分</strong> &nbsp;｜&nbsp; ✓ 3–5 个 ＝ <strong>2分</strong> &nbsp;｜&nbsp; ✓ 6–8 个 ＝ <strong>3分</strong>` +
                      `</div>`,
        teacherAnalysis: "<strong>【课本原题：文言句子翻译题】</strong>完全对应课本第96页第3题(a)(b)。注意译出通假字“反（返回）”、“市罢（集市结束）”与宾语前置“自信（相信自己）”。"
    }
];
