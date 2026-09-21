# 套件 0 号批次（M2 起，M3a 继续用）

对照评估报告 Top 10 第 9 条与 PRD 附录 D.2：**先做套件再铺城**。本目录是工厂输入，不是 333 座可玩清单。

## 本批次 4 套

| id | 名称 | 路网 style | 先给谁用 |
| --- | --- | --- | --- |
| `north-brick-hutong` | 北方砖 + 胡同 | `hutong_axis` | 北京 live；华北草稿 |
| `jiangnan-water` | 江南水岸 | `jiangnan_water` | 上海 live；江浙沪草稿 |
| `lingnan-qilou` | 岭南骑楼 | `qilou_street` | 广州 live；华南草稿 |
| `oasis-flat` | 绿洲平顶 | `oasis_court` | 酒泉/乌鲁木齐草稿（西安 live 用北方砖+城墙，不是绿洲卡通） |

未进 0 号、登记给后续：东北厚墙、盆地吊脚、高原石、毡房、海岛坡。哈尔滨 live 暂用北方砖冷色 + `northeast_grid` 路网，不单开套件文件。

## 如何导出一座非标杆 B 级草稿

```bash
npm run scaffold:city -- --adcode=320100
# 或指定套件
npm run scaffold:city -- --adcode=650100 --kit=oasis-flat
```

脚手架会：

1. 读 `tools/admin-div-data.mjs`（无 lat/lon）拿到名称、省、气候分区。
2. 按 `--kit` 或大区默认套件，写入 `public/packs/<packId>/` 的 city/layout/knowledge/quiz **草稿**。
3. **会**把该城以 `status: draft` 写入/更新 `public/packs/manifest.json`，**不会**写入 `liveCityPacks`，也 **不会**改 `playable_3d`。
4. 人工补 3 个剪影地标、GUARD/VISIT、知识卡审校后，才能申请 live。

批量拉齐某区灰壳：

```bash
npm run scaffold:region -- --region=华南
npm run scaffold:region -- --all-drafts
```

禁止：把星湾灰绿正交网格当工厂默认；把重庆多层崖线写进默认套件；半自动写民族/宗教教义/在世人物/国界。
