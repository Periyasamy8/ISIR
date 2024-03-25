/*------------------------------------------------------------------
Concern Tracking System Admin Template by Ganapathi Subramaniam, Arun Prasad

For

Daimler India Commercial Vehicle
------------------------------------------------------------------*/

/*****************************************************************
Concern Tracking System Theme.js Table of Contents

- Document Ready State
- ShrinkTable
- Close minizined table
- Dynamic Page scroll 
- Tooltips
	
!Note: You can search using the title above
*****************************************************************/

function nctextboxkeyup(id) {
    if ($('#' + id).val() == '') {
        $('#' + id).css('border', '1px solid red');
    }
    else {
        $('#' + id).css('border', '1px solid #ccc');
    }
}

function dropdownchangevalidation(id) {
    if ($('#' + id).val() == '') {
        $('#' + id).css('border', '1px solid red');
    }
    else {
        $('#' + id).css('border', '1px solid #ccc');
    }
}

function getSum(total, num) {
    return parseFloat(total) + Math.round(num);
}

// Document Ready State
function getQueryStrings() {
    var assoc = {};
    var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
    var queryString = location.search.substring(1);
    var keyValues = queryString.split('&');

    for (var i in keyValues) {
        var key = keyValues[i].split('=');
        if (key.length > 1) {
            assoc[decode(key[0])] = decode(key[1]);
        }
    }

    return assoc;
}


var dict = {
    "English": {
        jp: "英語",
        en: "English"
    },
    "Japanese": {
        jp: "日本語",
        en: "Japanese"
    },
    "Change Password": {
        jp: "パスワードを変更する",
        en: "Change Password"
    },
    "Last Login": {
        jp: "前回のログイン",
        en: "Last Login"
    },
    "Log out": {
        jp: "ログアウト",
        en: "Log out"
    },
    "DTA QM Concern Tracking System": {
        jp: "DTA QM 問題点追跡システム",
        en: "DTA QM Concern Tracking System"
    },
    "Home": {
        jp: "ホーム",
        en: "Home"
    },
    "Concern Tracker": {
        jp: "懸念トラッカー",
        en: "Concern Tracker"
    },
    "Product Audit": {
        jp: "製品監査",
        en: "Product Audit"
    },
    "Analysis": {
        jp: "分析",
        en: "Analysis"
    },
    "Extras": {
        jp: "エクストラ",
        en: "Extras"
    },
    "Create Concern": {
        jp: "懸念を作成する",
        en: "Create Concern"
    },
    "Search": {
        jp: "サーチ",
        en: "Search"
    },
    "All": {
        jp: "すべて",
        en: "All"
    },
    "Own Concerns": {
        jp: "自分の懸念",
        en: "Own Concerns"
    },
    "Reopened": {
        jp: "再オープン",
        en: "Reopened"
    },
    "Due for Closure": {
        jp: "期限前",
        en: "Due for Closure"
    },
    "Overdue Closure": {
        jp: "期限越え",
        en: "Overdue Closure"
    },
    "Concern No": {
        jp: "問題点番号",
        en: "Concern No"
    },
    "Shop / Project": {
        jp: "ショップ/プロジェクト",
        en: "Shop / Project"
    },
    "QFL Type": {
        jp: "QFLタイプ",
        en: "QFL Type"
    },
    "Description": {
        jp: "説明",
        en: "Description"
    },
    "Damage Code": {
        jp: "ダメージコード",
        en: "Damage Code"
    },
    "Created Date": {
        jp: "作成日",
        en: "Created Date"
    },
    "Class": {
        jp: "クラス",
        en: "Class"
    },
    "Ageing": {
        jp: "エージング",
        en: "Ageing"
    },
    "Resp Person": {
        jp: "担当者",
        en: "Resp Person"
    },
    "Resp Department": {
        jp: "責任部署",
        en: "Resp Department"
    },
    "Production Stage": {
        jp: "世代",
        en: "Production Stage"
    },
    "Part No": {
        jp: "部品番号",
        en: "Part No"
    },
    "Status": {
        jp: "状態",
        en: "Status"
    },
    "Raised by": {
        jp: "作成者",
        en: "Raised by"
    },
    "Select": {
        jp: "選択",
        en: "Select"
    },
    "Close": {
        jp: "閉じる",
        en: "Close"
    },
    "Select All": {
        jp: "すべて選択",
        en: "Select All"
    },
    "All selected": {
        jp: "すべて選択",
        en: "All selected"
    },
    "From Date": {
        jp: "日付から",
        en: "From Date"
    },
    "To Date": {
        jp: "現在まで",
        en: "To Date"
    },
    "filtered from": {
        jp: "フィルタリングされた",
        en: "filtered from"
    },
    "total entries": {
        jp: "合計エントリ",
        en: "total entries"
    },
    "No matching records found": {
        jp: "該当する記録が見つかりません",
        en: "No matching records found"
    },
    "No Records Found": {
        jp: "レコードが見つかりません",
        en: "No Records Found"
    },
    "Confirmation": {
        jp: "確認",
        en: "Confirmation"
    },
    "OK": {
        jp: "はい",
        en: "OK"
    },
    "Showing": {
        jp: "見せる",
        en: "Showing"
    },
    "to ": {
        jp: "に",
        en: "to"
    },
    "of": {
        jp: "の",
        en: "of"
    },
    "entries": {
        jp: "エントリー",
        en: "entries"
    },
    "Previous": {
        jp: "前",
        en: "Previous"
    },
    "Next": {
        jp: "次",
        en: "Next"
    },
    "Browse": {
        jp: "添付",
        en: "Browse"
    },
    "Plant": {
        jp: "工場",
        en: "Plant"
    },
    "Shop / Line / Project": {
        jp: "ショップ/ライン/プロジェクト",
        en: "Shop / Line / Project"
    },
    "Issue Description": {
        jp: "不具合内容",
        en: "Issue Description"
    },
    "Defect Class": {
        jp: "デフェクトクラス/重要度",
        en: "Defect Class"
    },
    "Date of occurance": {
        jp: "発生日",
        en: "Date of occurance"
    },
    "Quality Gate": {
        jp: "クオリティゲート",
        en: "Quality Gate"
    },
    "No of Defects": {
        jp: "不良/検査数",
        en: "No of Defects"
    },
    "Vehicle/Product Type": {
        jp: "機種/品番",
        en: "Vehicle/Product Type"
    },
    "Variant": {
        jp: "バリアント",
        en: "Variant"
    },
    "Part Name": {
        jp: "部品名/品名",
        en: "Part Name"
    },
    "Station No": {
        jp: "工程番号",
        en: "Station No"
    },
    "Defect Category": {
        jp: "不具合項目",
        en: "Defect Category"
    },
    "Customer Impact": {
        jp: "顧客への影響",
        en: "Customer Impact"
    },
    "Supplier Name": {
        jp: "サプライヤ名",
        en: "Supplier Name"
    },
    "Defect Source": {
        jp: "発生源",
        en: "Defect Source"
    },
    "Responsible Person": {
        jp: "担当者",
        en: "Responsible Person"
    },
    "Responsible Department": {
        jp: "責任部署",
        en: "Responsible Department"
    },
    "Image": {
        jp: "画像",
        en: "Image"
    },
    "Supplier": {
        jp: "サプライヤー",
        en: "Supplier"
    },
    "Transit": {
        jp: "トランジット",
        en: "Transit"
    },
    "Logistics": {
        jp: "ロジスティクス",
        en: "Logistics"
    },
    "Production Line": {
        jp: "生産ライン",
        en: "Production Line"
    },
    "Stockyard": {
        jp: "ストックヤード",
        en: "Stockyard"
    },
    "Dealer Stock": {
        jp: "ディーラーストック",
        en: "Dealer Stock"
    },
    "Field": {
        jp: "フィールド",
        en: "Field"
    },
    "Affected Qty": {
        jp: "影響を受ける数量",
        en: "Affected Qty"
    },
    "Retrofitment/Rework Qty as on date": {
        jp: "レトロフィット/リワーク",
        en: "Retrofitment/Rework Qty as on date"
    },
    "Issue History": {
        jp: "発行履歴",
        en: "Issue History"
    },
    "Date": {
        jp: "日付",
        en: "Date"
    },
    "VIN No / PIN": {
        jp: "車番",
        en: "VIN No / PIN"
    },
    "VIN/Prod. Iden. No.": {
        jp: "VIN / Prod. Iden. いいえ.",
        en: "VIN/Prod. Iden. No."
    },
    "Observed By": {
        jp: "発見者/場所",
        en: "Observed By"
    },
    "Remarks": {
        jp: "備考",
        en: "Remarks"
    },
    "Add": {
        jp: "追加",
        en: "Add"
    },
    "Clear": {
        jp: "クリア",
        en: "Clear"
    },
    "Product Audit Tracker": {
        jp: "製品監査トラッカー",
        en: "Product Audit Tracker"
    },
    "Audit Date": {
        jp: "監査日",
        en: "Audit Date"
    },
    "Total DPU": {
        jp: "総DPU",
        en: "Total DPU"
    },
    "Audited By": {
        jp: "監査人",
        en: "Audited By"
    },
    "Audit Observation": {
        jp: "監査観測",
        en: "Audit Observation"
    },
    "Submit": {
        jp: "提出する",
        en: "Submit"
    },
    "Save": {
        jp: "セーブ",
        en: "Save"
    },
    "Cancel": {
        jp: "キャンセル",
        en: "Cancel"
    },
    "Delete": {
        jp: "削除",
        en: "Delete"
    },
    "Problem Description": {
        jp: "問題の説明",
        en: "Problem Description"
    },
    "Containment Action": {
        jp: "暫定処置",
        en: "Containment Action"
    },
    "Root Cause Analysis": {
        jp: "真の原因",
        en: "Root Cause Analysis"
    },
    "Corrective Action": {
        jp: "是正処置",
        en: "Corrective Action"
    },
    "Monitoring Effectiveness": {
        jp: "有効性確認",
        en: "Monitoring Effectiveness"
    },
    "Action Date": {
        jp: "実施（予定）日",
        en: "Action Date"
    },
    "Attachments": {
        jp: "添付",
        en: "Attachments"
    },
    "Plan Date": {
        jp: "実施（予定）日",
        en: "Plan Date"
    },
    "Implementation VIN No": {
        jp: "実施号機",
        en: "Implementation VIN No"
    },
    "Implementation VIN/Prod. Iden. No.": {
        jp: "実装VIN / Prod. Iden. いいえ.",
        en: "Implementation VIN/Prod. Iden. No."
    },
    "Start Date": {
        jp: "確認開始日",
        en: "Start Date"
    },
    "IAR Rejection": {
        jp: "IAR拒否",
        en: "IAR Rejection"
    },
    "Rejection Comments": {
        jp: "拒否コメント",
        en: "Rejection Comments"
    },
    "ReOpen Confirmation": {
        jp: "再確認の確認",
        en: "ReOpen Confirmation"
    },
    "Are you sure? Want to ReOpen this Issue?": {
        jp: "本気ですか？ この問題を再開したいですか？",
        en: "Are you sure? Want to ReOpen this Issue?"
    },
    "No": {
        jp: "いいえ",
        en: "No"
    },
    "Yes": {
        jp: "はい",
        en: "Yes"
    },
    "Current Status": {
        jp: "現在のステータス",
        en: "Current Status"
    },
    "Registered IAR": {
        jp: "登録されたIAR",
        en: "Registered IAR"
    },
    "Open": {
        jp: "開いた",
        en: "Open"
    },
    "Implementation": {
        jp: "実装",
        en: "Implementation"
    },
    "Monitoring": {
        jp: "モニタリング",
        en: "Monitoring"
    },
    "Closed": {
        jp: "閉館",
        en: "Closed"
    },
    "Closure": {
        jp: "閉鎖",
        en: "Closure"
    },
    "Concern Details": {
        jp: "懸念事項",
        en: "Concern Details"
    },
    "Actions": {
        jp: "行動",
        en: "Actions"
    },
    "History": {
        jp: "歴史",
        en: "History"
    },
    "ReOpen": {
        jp: "再オープン",
        en: "ReOpen"
    },
    "Move To Monitoring": {
        jp: "モニタリングに移動",
        en: "Move To Monitoring"
    },
    "Expected Closure Date": {
        jp: "予想終了日",
        en: "Expected Closure Date"
    },
    "Containment Action History": {
        jp: "封じ込め行動の歴史",
        en: "Containment Action History"
    },
    "Root Cause Analysis History": {
        jp: "根本原因分析の履歴",
        en: "Root Cause Analysis History"
    },
    "Corrective Action History": {
        jp: "是正措置の歴史",
        en: "Corrective Action History"
    },
    "Monitoring Effectiveness History": {
        jp: "有効性履歴の監視",
        en: "Monitoring Effectiveness History"
    },
    "Remarks History": {
        jp: "備考歴史",
        en: "Remarks History"
    },
    "Observations": {
        jp: "観察",
        en: "Observations"
    },
    "Save As Draft": {
        jp: "下書きとして保存",
        en: "Save As Draft"
    },
    "Project Master": {
        jp: "プロジェクトマスター",
        en: "Project&nbsp;Master"
    },
    "Production Stage Master": {
        jp: "生産ステージマスター",
        en: "Production Stage Master"
    },
    "Add Project": {
        jp: "プロジェクトを追加",
        en: "Add Project"
    },
    "Action": {
        jp: "アクション",
        en: "Action"
    },
    "Add Production Stage": {
        jp: "プロダクションステージを追加",
        en: "Add Production Stage"
    },
    "QFL Type Master": {
        jp: "QFLタイプマスター",
        en: "QFL Type Master"
    },
    "Add QFL Type": {
        jp: "QFLタイプを追加",
        en: "Add QFL Type"
    },
    "Production Stage Name": {
        jp: "生産段階名",
        en: "Production Stage Name"
    },
    "Add Quality Gate": {
        jp: "品質ゲートを追加",
        en: "Add Quality Gate"
    },
    "Quality Gate Master": {
        jp: "品質ゲートマスター",
        en: "Quality Gate Master"
    },
    "Customer Impact Master": {
        jp: "カスタマーインパクトマスター",
        en: "Customer Impact Master"
    },
    "Add Customer Impact": {
        jp: "顧客への影響を加える",
        en: "Add Customer Impact"
    },
    "Add Defect Category": {
        jp: "欠陥カテゴリを追加する",
        en: "Add Defect Category"
    },
    "Defect Category Master": {
        jp: "欠陥カテゴリマスター",
        en: "Defect Category Master"
    },
    "Add Defect Source": {
        jp: "欠陥ソースを追加する",
        en: "Add Defect Source"
    },
    "Defect Source Master": {
        jp: "欠陥源マスタ",
        en: "Defect Source Master"
    },
    "Add IRA Responsible": {
        jp: "責任あるIRAを追加",
        en: "Add IRA Responsible"
    },
    "IRA Responsible Master": {
        jp: "IRA責任マスター",
        en: "IRA Responsible Master"
    },
    "Vehicle Type Master": {
        jp: "車両タイプマスター",
        en: "Vehicle Type Master"
    },
    "Vehicle Type": {
        jp: "車種",
        en: "Vehicle Type"
    },
    "Add Vehicle Type": {
        jp: "車両タイプを追加",
        en: "Add Vehicle Type"
    },
    "Add Variant": {
        jp: "バリアントの追加",
        en: "Add Variant"
    },
    "Add Model": {
        jp: "モデルを追加する",
        en: "Add Model"
    },
    "Model": {
        jp: "モデル",
        en: "Model"
    },
    "Model Master": {
        jp: "モデルマスター",
        en: "Model Master"
    },
    "Variant Master": {
        jp: "バリアントマスター",
        en: "Variant Master"
    },
    "Parts Master": {
        jp: "パーツマスター",
        en: "Parts Master"
    },
    "Add Parts": {
        jp: "パーツを追加する",
        en: "Add Parts"
    },
    "Parts Number": {
        jp: "部品番号",
        en: "Parts Number"
    },
    "Parts Name": {
        jp: "部品名",
        en: "Parts Name"
    },
    "Supplier Master": {
        jp: "サプライヤーマスター",
        en: "Supplier Master"
    },
    "Add Supplier": {
        jp: "サプライヤを追加",
        en: "Add Supplier"
    },
    "Supplier Code": {
        jp: "サプライヤコード",
        en: "Supplier Code"
    },
    "Project": {
        jp: "プロジェクト",
        en: "Project"
    },
    "Issue Status": {
        jp: "問題のステータス",
        en: "Issue Status"
    },
    "Overdue Issues": {
        jp: "延滞問題",
        en: "Overdue Issues"
    },
    "Issue Resolution Status": {
        jp: "問題の解決状況",
        en: "Issue Resolution Status"
    },
    "Issue Closure Forecasting": {
        jp: "問題のクロージャ予測",
        en: "Issue Closure Forecasting"
    },
    "Projects": {
        jp: "プロジェクト",
        en: "Projects"
    },
    "From": {
        jp: "から",
        en: "From"
    },
    "To": {
        jp: "に",
        en: "To"
    },
    "Overdue Issues": {
        jp: "延滞問題",
        en: "Overdue Issues"
    },
    "Issue Resolution Status Report": {
        jp: "問題解決ステータスレポート",
        en: "Issue Resolution Status Report"
    },
    "Total number of Active Issues - All Issues": {
        jp: "アクティブな問題の総数 - すべての問題",
        en: "Total number of Active Issues - All Issues"
    },
    "Issues Raised in given period": {
        jp: "一定期間内に提起された問題",
        en: "Issues Raised in given period"
    },
    "Issues Closed in given period": {
        jp: "一定期間内に終了した問題",
        en: "Issues Closed in given period"
    },
    "All Open Issues ageing by functions": {
        jp: "すべての未解決の問題",
        en: "All Open Issues ageing by functions"
    },
    "All Open Issues ageing by Priority": {
        jp: "すべての未解決の問題優先度によるエージング",
        en: "All Open Issues ageing by Priority"
    },
    "Change": {
        jp: "変化する",
        en: "Change"
    },
    "Issue Closure - Forecasting": {
        jp: "問題のクロージャ - 予測",
        en: "Issue Closure - Forecasting"
    },
    "Actual Closed": {
        jp: "実際の休業日",
        en: "Actual Closed"
    },
    "Planned Closure": {
        jp: "計画的閉鎖",
        en: "Planned Closure"
    },
    "Please Fill All Mandatorily Fields before Moving to Implementation": {
        jp: "計画的閉鎖",
        en: "実装に移る前にすべての必須フィールドを入力してください"
    },
    "Please Fill Rejection Comments Fields before Rejecting IAR": {
        jp: "IARを拒否する前に拒否コメントフィールドに記入してください",
        en: "Please Fill Rejection Comments Fields before Rejecting IAR"
    },
    "Please Fill All Mandatorily Fields before Moving to Monitoring": {
        jp: "モニタリングに移行する前にすべての必須フィールドを入力してください",
        en: "Please Fill All Mandatorily Fields before Moving to Monitoring"
    },
    "Actions Accepted and Issue has been Moved to Implementation": {
        jp: "承認されたアクションと問題は実装に移されました",
        en: "Actions Accepted and Issue has been Moved to Implementation"
    },
    "Issue has been Moved to Monitoring": {
        jp: "問題が監視に移動されました",
        en: "Issue has been Moved to Monitoring"
    },
    "Issue has been Moved to Closed": {
        jp: "問題は閉鎖に移行しました",
        en: "Issue has been Moved to Closed"
    },
    "Issue has been ReOpned Successfully": {
        jp: "問題が再開されました。",
        en: "Issue has been ReOpned Successfully"
    },
    "Issue has been Updated Successfully": {
        jp: "問題が正常に更新されました",
        en: "Issue has been Updated Successfully"
    },
    "Error Processing": {
        jp: "エラー処理",
        en: "Error Processing"
    },
    "Product Audit Daily Report": {
        jp: "製品監査日報",
        en: "Product Audit Daily Report"
    },
    "Responsible": {
        jp: "責任ある",
        en: "Responsible"
    },
    "Category": {
        jp: "カテゴリー",
        en: "Category"
    },
    "Classification": {
        jp: "分類",
        en: "Classification"
    },
    "Total": {
        jp: "合計",
        en: "Total"
    },
    "Total YTD": {
        jp: "YTDの合計",
        en: "Total YTD"
    },
    "Number of Overdue Issues": {
        jp: "延滞問題の数",
        en: "Number of Overdue Issues"
    },
    "Issues Due with ": {
        jp: "問題の原因 ",
        en: "Issues Due with "
    },
    "Overdue Issues ": {
        jp: "延滞問題 ",
        en: "Overdue Issues "
    },
    "Construction Group": {
        jp: "建設グループ",
        en: "Construction Group"
    },
    "Damage Part Location": {
        jp: "ダメージパーツの場所",
        en: "Damage Part Location"
    },
    "Fault Type": {
        jp: "フォルトタイプ",
        en: "Fault Type"
    },
    "Damage Code Results": {
        jp: "損害コード結果",
        en: "Damage Code Results"
    },
    "Damage Code Description": {
        jp: "損害コードの説明",
        en: "Damage Code Description"
    },
    "Damage Code Generated": {
        jp: "生成されたダメージコード",
        en: "Damage Code Generated"
    },
    "Issue Resolution Status (Priority Wise) Report": {
        jp: "問題解決ステータス（優先順位別）レポート",
        en: "Issue Resolution Status (Priority Wise) Report"
    },
    "'A' Open Issues ageing by functions": {
        jp: "'A'未解決の問題関数によるエージング",
        en: "'A' Open Issues ageing by functions"
    },
    "'B' Open Issues ageing by functions": {
        jp: "'B'オープンな問題関数によるエージング",
        en: "'B' Open Issues ageing by functions"
    },
    "'C' Open Issues ageing by functions": {
        jp: "'C'オープンな問題関数によるエージング",
        en: "'C' Open Issues ageing by functions"
    },
    "'D' Open Issues ageing by functions": {
        jp: "'D'オープンな問題関数によるエージング",
        en: "'D' Open Issues ageing by functions"
    },
    "Issue Resolution Status - Priority Wise": {
        jp: "問題解決ステータス - 優先順位別",
        en: "Issue Resolution Status - Priority Wise"
    },
    "Alert Notification": {
        jp: "アラート通知",
        en: "Alert Notification"
    },
    "Type": {
        jp: "タイプ",
        en: "Type"
    },
    "Overall Issues": {
        jp: "全体的な問題",
        en: "Overall Issues"
    },
    "Average Run Time in Days": {
        jp: "平均実行時間（日）",
        en: "Average Run Time in Days"
    },
    "Total No. of Active Issues": {
        jp: "アクティブな問題の総数",
        en: "Total No. of Active Issues"
    },
    "TPRS (Total Problem Resolution Speed) = Average(Issue moved to monitoring - Issue Registered)": {
        jp: "TPRS (合計問題解決速度) = 平均（モニタリングに移った問題 - 登録された問題）",
        en: "TPRS (Total Problem Resolution Speed) = Average(Issue moved to monitoring - Issue Registered)"
    },
    "Average Runtime in days = Average(Issue Closure Date - Issue Registered)": {
        jp: "平均ランタイム（日数=平均）（発行日 - 発行登録）",
        en: "Average Runtime in days = Average(Issue Closure Date - Issue Registered)"
    },
    "Resolution Time": {
        jp: "解決時間",
        en: "Resolution Time"
    },
    "You do not have required access rights to use this tool! Please contact Administrator for further assistance": {
        jp: "このツールを使用するために必要なアクセス権がありません！ 詳細については管理者にお問い合わせください",
        en: "You do not have required access rights to use this tool! Please contact Administrator for further assistance"
    },
    "Quality Gate for Auto QFL": {
        jp: "自動QFL用品質ゲート",
        en: "Quality Gate for Auto QFL"
    },
    "Production Date of Vehicle": {
        jp: "製造年月",
        en: "Production Date of Vehicle"
    },
    "Vehicle Model": {
        jp: "型式",
        en: "Vehicle Model"
    },
    "Vehicle Number": {
        jp: "車番",
        en: "Vehicle Number"
    },
    "Production Number": {
        jp: "工事番号",
        en: "Production Number"
    },
    "Parts Received": {
        jp: "納入数",
        en: "Parts Received"
    },
    "Supply Code": {
        jp: "納入コード",
        en: "Supply Code"
    },
    "Notify to": {
        jp: "通知先",
        en: "Notify to"
    },
    "PQR No": {
        jp: "PQRいいえ",
        en: "PQR No"
    },
    "Shop / Line / Project Master": {
        jp: "ショップ/ライン/プロジェクトマスター",
        en: "Shop / Line / Project Master"
    },
    "Vehicle/Product Type Master": {
        jp: "車両/製品タイプマスター",
        en: "Vehicle/Product Type Master"
    },
    "Supplier Name Master": {
        jp: "サプライヤ名マスタ",
        en: "Supplier Name Master"
    },
    "Responsible Department Master": {
        jp: "責任ある部長",
        en: "Responsible Department Master"
    },
    "Add Responsible Department": {
        jp: "担当部門を追加",
        en: "Add Responsible Department"
    },
    "Under Implementation": {
        jp: "実装中",
        en: "Under Implementation"
    },
    "Product Audit Summary": {
        jp: "製品監査サマリー",
        en: "Product Audit Summary"
    },
    "Month wise overall DPU Trend": {
        jp: "DPUの全体的なトレンド",
        en: "Month wise overall DPU Trend"
    },
    "Product Audit YTD": {
        jp: "製品監査YTD",
        en: "Product Audit YTD"
    },
    "All": {
        jp: "すべて",
        en: "All"
    },
    "Delete Confirmation": {
        jp: "確認の削除",
        en: "Delete Confirmation"
    },
    "Need Reason for Delete": {
        jp: "削除の理由が必要",
        en: "Need Reason for Delete"
    },
    "Short Description": {
        jp: "簡単な説明",
        en: "Short Description"
    }
}

$(document).ready(function () {

    //LayoutPopupDropdown();//Common Plant Dropdown
    $(':input').on('focus', function () {
        $(this).attr('autocomplete', 'off');
    });
    Tooltips(); // Tooltip
    ConcernPage();
    EditConcernDetails();
    $('.Languagepicker').selectpicker();

    $('.Languagepicker').on('change', function (ev) {

        var selected = $(this).find("option:selected").val();

        var ApiFunc = '../Home/LanguageChanger/';

        var input = JSON.stringify({ "input": selected });

        PostMethod(ApiFunc, input, '', function (data) {

            UserDetails.language = data.language;
            Conversion(selected);
            ev.preventDefault();
        });

    });
    if (!alertify.myAlert) {
        //define a new dialog
        alertify.dialog('myAlert', function () {
            return {
                main: function (message, header) {
                    this.message = message;
                    $('#alertheader').text(header);
                },
                setup: function () {
                    return {
                        buttons: [{ text: "OK" }],
                        focus: { element: 0 }
                    };
                },
                prepare: function () {
                    this.setContent(this.message);
                }
            }
        });
    }
    //For Multiple trn - Values will not reset in the page
    //$('.removemultipletrn').multipleSelect({
    //    filter: true,
    //    single: false,
    //    placeholder: "Select",
    //    onClick: function (view) {
    //        var text = $(".removemultipletrn").find('button').find('span');
    //        if (text.text() != "Select") {
    //            $(text).removeAttr("data-trn-key");
    //        }
    //        else if(text.text()== "All selected")
    //        {
    //            $(text).attr("data-trn-key", "All selected");
    //        }
    //        else {
    //            $(text).attr("data-trn-key", "Select");
    //        }
    //    },
    //    onUncheckAll: function () {
    //        var text = $(".removemultipletrn").find('button').find('span');
    //        $(text).attr("data-trn-key", "Select");
    //    },
    //    onCheckAll: function () {
    //        var text = $(".removemultipletrn").find('button').find('span');
    //        $(text).attr("data-trn-key", "All selected");
    //    },
    //    width: "100%",
    //    onClose: function () {
    //    }
    //});

    //For Single trn - Values will not reset in the page
    //$('.removesingletrn').multipleSelect({
    //    filter: true,
    //    single: true,
    //    placeholder: "Select",
    //    onClick: function (view) {
    //        var text = $(".removesingletrn").find('button').find('span');
    //        if (text.text() != "Select") {
    //            $(text).removeAttr("data-trn-key");
    //        }
    //        else {
    //            $(text).attr("data-trn-key", "Select");
    //        }
    //    },
    //    width: "100%",
    //    onClose: function () {
    //    }
    //});

    //$('body').on('click', '.removesingletrn div button', function () {
    //    var text = $(".removesingletrn div button").find('span');
    //    if (text.text() != "Select") {
    //        $(text).removeAttr("data-trn-key");
    //    }
    //    else {
    //        $(text).attr("data-trn-key", "Select");
    //    }
    //});

    $('.plant_master').on('change', function (ev) {
       
        UserDetails.selectedplant = $("#sddlplantMaster").val();
        CommonPlantBasedDropdowns($("#sddlplantMaster").val());
    });

    var qs = getQueryStrings();
    var selected = $('.Languagepicker').val();
    var translator = '';
    var myParam = qs["ln"];
    if (myParam != null && myParam != undefined && selected != null && selected != '') {
        $('.Languagepicker').selectpicker('val', myParam);
        Conversion(myParam);

    }

});

// End of Document Ready State

function Conversion(ln) {

    var translator = $('#lBody').translate({ lang: ln, t: dict });
    //Translate export to excel and ppt download
    $("#lnkexcel").removeAttr('title')
    $('.Languagepicker').val() != "en" ? $("#lnkexcel").attr("data-original-title", "Excelにエクスポート") : $("#lnkexcel").attr("data-original-title", "Export to Excel");
    $('.ppt').removeAttr('title')
    $('.Languagepicker').val() != "en" ? $('.ppt').attr("data-original-title", "PPTダウンロード") : $('.ppt').attr("data-original-title", "PPT Download");
    $("#deleteiar").removeAttr('title')
    $('.Languagepicker').val() != "en" ? $("#deleteiar").attr("data-original-title", "懸念を削除") : $("#deleteiar").attr("data-original-title", "Delete Concern");
    $("#deleteaudit").removeAttr('title')
    $('.Languagepicker').val() != "en" ? $("#deleteaudit").attr("data-original-title", "VIN監査を削除") : $("#deleteaudit").attr("data-original-title", "Delete Audit VIN");
    $('#btnDownloadPDF').removeAttr('title')
    $('.Languagepicker').val() != "en" ? $("#btnDownloadPDF").attr("data-original-title", "PDFにエクスポート") : $("#btnDownloadPDF").attr("data-original-title", "Export to PDF");
    $('#pptdownload').removeAttr('title')
    $('.Languagepicker').val() != "en" ? $("#pptdownload").attr("data-original-title", "PDFにエクスポート") : $("#pptdownload").attr("data-original-title", "PPT Download");
     
}



// Shrink Table
function ShrinkTable() {



}

// Close minizined table
function CloseEditSchedule() {

    $(".tblsmall").removeClass("tableMinimized col-lg-3");
    $('[data-label]').css('display', '');
    $('[data-minilabel]').css('display', '');
    $(".tblsmalledit").hide();
    $("tr").removeClass("activegrey");
    $("body").removeClass("bodyoveflow");
    overallTableScrollCustomized();
}

// Dynamic Page scroll 
function resizeContent() {

    $(".tableMinimized,.smalltbleditablecontent").mCustomScrollbar({
        //setHeight:340,
        theme: "minimal-dark",
        //theme:"inset-2-dark"
        //theme:"dark-3"
        callbacks: {
            onScroll: function () {
                openSelect($(".js-example-tags"));
                openSelect($(".js-example-tags"));

            }
        }
    });
    $height = $(window).height() - 290;
    $(".tableMinimized ").height($height);
    $(".smalltbleditablecontent ").height($height);
    $(".Table_contentpanel ").height($height);

}

//overall table tab scroll

function EditConcernDetails() {

    $(".EditConcern, .AuditCreateConcern").mCustomScrollbar({

        scrollbarPosition: "outside",
        theme: "minimal-dark",

        callbacks: {
            onScroll: function () {
                openSelect($(".js-example-tags"));
                openSelect($(".js-example-tags"));

            }
        }
    });
    $height = $(window).height() - 220;

    $(".EditConcern, .AuditCreateConcern").height($height);

}

function ConcernPage() {

    $(".ConcernPage").mCustomScrollbar({

        scrollbarPosition: "outside",
        theme: "minimal-dark",

        callbacks: {
            onScroll: function () {
                openSelect($(".js-example-tags"));
                openSelect($(".js-example-tags"));

            }
        }
    });
    $height = $(window).height() - 340;

    $(".ConcernPage").height($height);

}

// Tooltips
function Tooltips() {

    $('body').tooltip({
        selector: '[data-toggle="tooltip"], [title]:not([data-toggle="popover"])',
        trigger: 'hover',
        container: 'body'
    }).on('click mousedown mouseup', '[data-toggle="tooltip"], [title]:not([data-toggle="popover"])', function () {
        $('[data-toggle="tooltip"], [title]:not([data-toggle="popover"])').tooltip('destroy');
    });

}

function DatatableFooterTranslater(id) {
    $('#' + id + '_info').translate({ lang: $('.Languagepicker').val(), t: dict });
    $('#' + id + '_paginate').translate({ lang: $('.Languagepicker').val(), t: dict });
}

//MenuRemoveClass
function MenuRemoveClass() {
    $("#RequestTracker").removeClass("active");
    $("#Masters").removeClass("active");
    $("#CreateRequestMenu").removeClass("active");
    $("#CreateComplaintMenu").removeClass("active");
    $("#Analysis").removeClass("active");
    $("#MatLab").removeClass("active");
    $("#MeasureLab").removeClass("active");    

}

//Generate guid
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function CheckFileType(filename) {
    var ext = filename.split('.')[1];
    var Filetype = '';
    if (ext == "pptx" || ext == "ppt") {
        Filetype = "ppt.png";
    }
    else if (ext == "xls" || ext == "xlsx" || ext == "csv") {
        Filetype = "excel.png";
    }
    else if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "svg" || ext == "JPG" || ext == "JPEG" || ext == "PNG" || ext == "SVG") {
        Filetype = "image.png";
    }
    else if (ext == "doc" || ext == "docx") {
        Filetype = "word.png";
    }
    else if (ext == "pdf") {
        Filetype = "pdf.png";
    }
    else if (ext == "mp4") {
        Filetype = "video.png";
    }
    else if (ext == "txt") {
        Filetype = "text.png";
    }
    else if (ext == "zip") {
        Filetype = "zip.png";
    }
    else {
        Filetype = "notype.png";
    }

    return Filetype;
}

function downloadFile() {
    alert('Please save the data and then download the file');
}

function openSelect(obj) {

    var element = obj[0];
    if (element != 'undefined' && element != undefined) {
        if (document.createEvent) { // all browsers
            var e = document.createEvent("MouseEvents");
            e.initMouseEvent("mousedown", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            element.dispatchEvent(e);
        } else
            if (element.fireEvent) { // ie
                element.fireEvent("onmousedown");
            }
    }
}

function LayoutPlantDropdownFill(UserDetails) {

    //var sddlplant = [];

    //$("#sddlplantMaster").empty();
    //var optionhtml1 = '<option value="' + '0' + '" selected>' + "Select" + '</option>';
    //sddlplant.push(optionhtml1);
    //var $dropdown = $("#sddlplantMaster");
    //$.each(UserDetails.plantlist, function (i, item) {
    //    var optionhtml = '<option value="' + item.plantid + '">' + item.plantname + '</option>';
    //    sddlplant.push(optionhtml);
    //});
    //$("#sddlplantMaster").append(sddlplant.join(' ')).multipleSelect("refresh");
    //$('#AsddlplantMaster').css('border', '1px solid #ccc');

    //if (UserDetails.plantlist != null && UserDetails.plantlist.length == 1) {
    //    $("#sddlplantMaster").multipleSelect("setSelects", [UserDetails.plantlist[0].plantid.toString()]);
    //    $("#AsddlplantMaster").val(UserDetails.plantlist[0].plantid.toString());
    //    $("#AsddlplantMaster").attr('disabled', 'disabled');
    //    UserDetails.selectedplant = UserDetails.plantlist[0].plantid.toString();
    //}
    //else {
    //    if (UserDetails.selectedplant != null && UserDetails.selectedplant != 0) {

    //        $("#sddlplantMaster").multipleSelect("setSelects", [UserDetails.selectedplant.toString()]);
    //        $("#AsddlplantMaster").val(UserDetails.selectedplant.toString());
    //    }
    //}

    var sddlplant = [];

    $("#sddlplantMaster").empty();
    var optionhtml1 = '<option value="' + '0' + '" selected>' + "All" + '</option>';
    sddlplant.push(optionhtml1);
    $.each(UserDetails.plantlist, function (i, item) {
        var optionhtml = '<option value="' + item.plantid + '" >' + item.plantname + '</option>';
        sddlplant.push(optionhtml);
    });
    $("#sddlplantMaster").append(sddlplant);

    if (UserDetails.plantlist != null && UserDetails.plantlist.length == 1) {//if user only single plant
        $("#sddlplantMaster").val(UserDetails.plantlist[0].plantid.toString());
        $('#sddlplantMaster').selectpicker('refresh');//Need to Refresh as we are using bootstrap select picker
        $("#sddlplantMaster").attr('disabled', 'disabled');
        UserDetails.selectedplant = UserDetails.plantlist[0].plantid.toString();
    }
    else {
        if (UserDetails.selectedplant != null && UserDetails.selectedplant != 0) {//if user had already selected plant

            $("#sddlplantMaster").val(UserDetails.selectedplant.toString());
            $('#sddlplantMaster').selectpicker('refresh');
        }
        else if (UserDetails.plantlist.length > 1)//if user have multiple plants
        {
            $("#sddlplantMaster").val("0");
            $('#sddlplantMaster').selectpicker('refresh');
        }
    }
}

function LayoutPopupDropdown() {
    //Plant
    $('#sddlplantMaster').multipleSelect({
        filter: true,
        single: true,
        placeholder: "Select",
        onClick: function (view) {

            if (view.value != "0") {
                $('#AsddlplantMaster').val(view.value);
            }
            else {
                $('#AsddlplantMaster').val('');
            }
            if (view.value != '') {
                $('#AsddlplantMaster').css('border', '1px solid #ccc');
            }
            else {
                $('#AsddlplantMaster').css('border', '1px solid red');
            }
            CommonPlantBasedDropdowns(view.value);
        },
        width: "54%",
        onClose: function () {
        }
    });
}
//var commonplantid = 0;
//function CommonPlantBasedDropdowns(plantid) {
//    //
//    //var ApiFunc = '../Home/CommonPlantIdBind/';

//    //var input = JSON.stringify({ "input": plantid });

//    //PostMethod(ApiFunc, input, '', function (data) {
//    //    
//    //    var id = data;
//    //    $("#sddlplantMaster").multipleSelect("setSelects", "575");
//    //    $("#AsddlplantMaster").val("575");
//    //});
//}
function navigate(target) {

    //Grab your values
    if (target == 'QMIssueTracker') {
        var url = '../Home/' + target;
    }
    else if (target == 'AuditTracker') {
        var url = '../Home/' + target;
    }
    else if (target == 'CreateConcern') {
        var url = '../Home/' + target;
    }
    else if (target == 'AuditObservation') {
        var url = '../Home/' + target;
    }
    else if (target == 'OverdueIssueClosure') {
        var url = '../Analysis/' + target;
    }
    else if (target == 'IssueResolutionStatus') {
        var url = '../Analysis/' + target;
    }
    else if (target == 'IRSPriorityWise') {
        var url = '../Analysis/' + target;
    }
    else if (target == 'IssueClosureForeCasting') {
        var url = '../Analysis/' + target;
    }
    else if (target == 'ResolutionTime') {
        var url = '../Analysis/' + target;
    }
    else if (target == 'ProductAuditYTD') {
        var url = '../Analysis/' + target;
    }

    else if (target == 'ProjectMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'ProductionStageMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'QFLTypeMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'QGateMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'CustomerImpactMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'DefectSourceMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'DefectCategoryMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'IRAResponsibleMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'VehicleTypeMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'ModelMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'PartsMaster') {
        var url = '../Master/' + target;
    }
    else if (target == 'SupplierMaster') {
        var url = '../Master/' + target;
    }

    //Perform your navigation
    //var selectedplant = $("#sddlplantMaster").multipleSelect("getSelects", "value")[0];
    //window.location.href = url + '?plantid=' + selectedplant;

    var selectedplant = $("#sddlplantMaster").val();
    window.location.href = url + '?plantid=' + selectedplant;
}


