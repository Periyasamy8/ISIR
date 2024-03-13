/*------------------------------------------------------------------
Audit Tool Admin Template by Ganapathi Subramaniam, Arun Prasad

For

Daimler India Commercial Vehicle
------------------------------------------------------------------*/

/*****************************************************************
Audit Tool Theme.js Table of Contents

- Document Ready State
- ShrinkTable
- Close minizined table
- Dynamic Page scroll 
- Tooltips
	
!Note: You can search using the title above
*****************************************************************/

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
        jp: "パスワード変更",
        en: "Change Password"
    },
    "Last Login": {
        jp: "最終ログイン",
        en: "Last Login"
    },
    "Log out": {
        jp: "ログアウト",
        en: "Log out"
    },
    "DTA QM Internal Audit Tool": {
        jp: "ＤＴＡ　ＱＭ内部監査ツール",
        en: "DTA QM Internal Audit Tool"
    },
    "Audit Tracker": {
        jp: "監査追跡",
        en: "Audit Tracker"
    },
    "Audit scheduling": {
        jp: "監査スケジュール",
        en: "Audit scheduling"
    },
    "Audit": {
        jp: "監査",
        en: "Audit"
    }
    ,
    "Reporting": {
        jp: "報告",
        en: "Reporting"
    },
    "Auditor": {
        jp: "監査員",
        en: "Auditor"
    },
    "Correction": {
        jp: "応急処置（不適合の除去)",
        en: "Correction"
    },
    "Q Rep": {
        jp: "コアチームメンバー",
        en: "Q Representative"
    },
    "Q Representative": {
        jp: "コアチームメンバー",
        en: "Q Representative"
    },
    "Core Team Member": {
        jp: "コアチームメンバー",
        en: "Core Team Member"
    },
    "Q Rep/Core Team Member": {
        jp: "コアチームメンバ",
        en: "Q Rep/Core Team Member"
    },
    "Review": {
        jp: "レビュー",
        en: "Review"
    },

    "Analysis": {
        jp: "分析",
        en: "Analysis"
    },
    "Consolidated Acceptance Report": {
        jp: "監査完了レポート",
        en: "Consolidated Acceptance Report"
    },
    "Consolidated NC Report": {
        jp: "指摘事項レポート",
        en: "Consolidated NC Report"
    },

    "Scheduled Audits": {
        jp: "予定された監査",
        en: "Scheduled Audits"
    },
    "Schedule New Audit": {
        jp: "新しい監査追加",
        en: "Schedule New Audit"
    },
    "Audit Reference Number": {
        jp: "監査NO.",
        en: "Audit Reference Number"
    },
    "Audit Reference No / NC No": {
        jp: "監査NO / 是正処置要求書No",
        en: "Audit Reference No / NC No"
    }
    ,
    "Audit Reference No": {
        jp: "監査NO.",
        en: "Audit Reference No"
    }
    ,
    "Audit Ref No": {
        jp: "監査NO.",
        en: "Audit Ref No"
    },
    "Audit Type": {
        jp: "監査種別",
        en: "Audit Type"
    },
    "Plant": {
        jp: "工場",
        en: "Plant"
    },
    "Department": {
        jp: "本部",
        en: "Department"
    },
    "Lead Auditor": {
        jp: "主任監査員",
        en: "Lead Auditor"
    },

    "Date of Audit": {
        jp: "監査日",
        en: "Date of Audit"
    },
    "Date Of Audit": {
        jp: "監査日",
        en: "Date Of Audit"
    },

    "Status": {
        jp: "ステータス",
        en: "Status"
    },

    "Showing": {
        jp: "を表示",
        en: "Showing"
    },


    "entries": {
        jp: "項目中",
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


    "Sub Function": {
        jp: "統括部 (本部)",
        en: "Sub Function"
    },

    "Remarks": {
        jp: "内容", //jp: "備考",
        en: "Remarks"
    },
    "Date": {
        jp: "日付",
        en: "Date"
    },
    "Time of Audit": {
        jp: "監査時間",
        en: "Time of Audit"
    },
    "Attachements": {
        jp: "添付資料",
        en: "Attachements"
    },

    "Save": {
        jp: "保存",
        en: "Save"
    },


    "Select": {
        jp: "選択する",
        en: "Select"
    },
    "Close": {
        jp: "閉じる",
        en: "Close"
    },
    "Scheduled": {
        jp: "予定された",
        en: "Scheduled"
    },
    "Inprogress": {
        jp: "推進中",
        en: "Inprogress"
    },
    "Completed": {
        jp: "完了済",
        en: "Completed"
    },



    "Browse":
    {
        jp: "参照",
        en: "Browse"
    }
    ,
    "Select All":
    {
        jp: "全選択",
        en: "Select All"
    },
    "All selected":
    {
        jp: "全選択",
        en: "All selected"
    },
    "filtered from":
    {
        jp: "～からフィルタされた",
        en: "filtered from"
    },

    "No matching records found":
    {
        jp: "適切な対象が見つかりません",
        en: "No matching records found"
    },
    "Auditee": {
        jp: "被監査者",
        en: "Auditee"
    },
    "Major NC": {
        jp: "重大な不適合",
        en: "Major NC"
    },
    "Minor NC": {
        jp: "軽微な不適合",
        en: "Minor NC"
    },

    "Audit Report": {
        jp: "監査レポート",
        en: "Audit Report"
    },

    "Audit Scheduled": {
        jp: "監査スケジュール",
        en: "Audit Scheduled"
    },

    "Audit Report Inprogress": {
        jp: "監査レポート作成中",
        en: "Audit Report Inprogress"
    },

    "Pending for Auditee Approval": {
        jp: "被監査部門の承認待ち",
        en: "Pending for Auditee Approval"
    },

    "Accepted": {
        jp: "承認",
        en: "Accepted"
    },
    "Rejected": {
        jp: "不承認",
        en: "Rejected"
    },
    "Accepted/Rejected": {
        jp: "承認/不承認",
        en: "Accepted/Rejected"
    },

    "NC Type": {
        jp: "不適合タイプ",
        en: "NC Type"
    },

    "NC No": {
        jp: "是正処置要求書No.",
        en: "NC No"
    },

    "NC Number": {
        jp: "是正処置要求書No.",
        en: "NC Number"
    },

    "NC Clause": {
        jp: "不適合条項",
        en: "NC Clause"
    },

    "Desc": {
        jp: "条文",
        en: "Desc"
    },

    "Process No": {
        jp: "プロセスNO.",
        en: "Process No"
    },
    "Process No. & Desc": {
        jp: "プロセスナンバー",
        en: "Process No. & Desc"
    },

    "NC Details": {
        jp: "不適合内容詳細",
        en: "NC Details"
    },

    "Non Conformity": {
        jp: "不適合",
        en: "Non Conformity"
    },

    "Positive Observation": {
        jp: "良い点",
        en: "Positive Observation"
    },

    "Add New": {
        jp: "新規追加",
        en: "Add New"
    },

    "Save as Draft": {
        jp: "下書保存",
        en: "Save as Draft"
    },

    "Submit": {
        jp: "提出",
        en: "Submit"
    },


    "OFI": {
        jp: "改善の機会",
        en: "OFI"
    },

    "+Ve Obs": {
        jp: "強味",
        en: "+Ve Obs"
    },

    "Responsible Person": {
        jp: "担当者",
        en: "Responsible Person"
    },

    "Accept": {
        jp: "受領",
        en: "Accept"
    },

    "Reject": {
        jp: "拒否",
        en: "Reject"
    },

    "Audit has been Scheduled successfully": {
        jp: "監査は正常に計画された",
        en: "Audit has been Scheduled successfully"
    },

    "Audit Schedule has been updated successfully": {
        jp: "監査計画が正常に更新された",
        en: "Audit Schedule has been updated successfully"
    },

    "The Audit Report has been saved as Draft": {
        jp: "監査レポートはドラフトとして保存されました",
        en: "The Audit Report has been saved as Draft"
    },

    "The Audit Report has been Submitted and sent for Auditee Approval": {
        jp: "監査レポートは、被監査部門に転送されました",
        en: "The Audit Report has been Submitted and sent for Auditee Approval"
    },

    "No Records Found": {
        jp: "対象が見つかりません",
        en: "No Records Found"
    },
    "Corrective and Preventive Actions": {
        jp: "是正処置・予防処置",
        en: "Corrective and Preventive Actions"
    },

    "Confirmation": {
        jp: "確認",
        en: "Confirmation"
    },
    "OK": {
        jp: "OK",
        en: "OK"
    },
    "PDF": {
        jp: "PDF",
        en: "PDF"
    },

    "Rejected Reason": {
        jp: "拒否理由",
        en: "Rejected Reason"
    },
    "Auditor should be able to raise NC only on or after Audit start date": {
        jp: "監査人は監査開始日以降にのみNCを提出することができる",
        en: "Auditor should be able to raise NC only on or after Audit start date"
    },
    "NC Description": {
        jp: "不適合内容",
        en: "NC Description"
    },
    "Process Description": {
        jp: "プロセスの記述",
        en: "Process Description"
    },
    "Acceptance":
    {
        jp: "承認",
        en: "Acceptance"
    },
    "Consolidated NC Report":
    {
        jp: "不適合サマリーレポート",
        en: "Consolidated NC Report"
    },
    "Measure":
    {
        jp: "改善",
        en: "Measure"
    },
    "No matching records found":
    {
        jp: "適切な対象が見つかりません",
        en: "No matching records found"
    },
    "Submission":
    {
        jp: "提出",
        en: "Submission"
    },

    "Accepted on":
    {
        jp: "受け入れられた",
        en: "Accepted on"
    },
    "Co Auditor":
    {
        jp: "監査員",
        en: "Co Auditor"
    },
    "Consolidated Measure Ageing Report":
    {
        jp: "確定された是正措置レポート",
        en: "Consolidated Measure Ageing Report"
    },
    "Consolidated Measure Status Report":
    {
        jp: "確定された是正措置状況レポート",
        en: "Consolidated Measure Status Report"
    },
    "Consolidated NC Acceptance Report Dept wise":
    {
        jp: "確定された不適合受理部門別レポート",
        en: "Consolidated NC Acceptance Report Dept wise"
    },
    "Consolidated NC Acceptance Report Department wise":
    {
        jp: "確定された不適合受理部門別レポート",
        en: "Consolidated NC Acceptance Report Department wise"
    },
    "Consolidated NC Report Dept wise":
    {
        jp: "確定された不適合部門別レポート",
        en: "Consolidated NC Report Dept wise"
    },
    "From Date":
    {
        jp: "日付から",
        en: "From Date"
    },
    "of":
    {
        jp: "トータルエントリー",
        en: "of"
    },
    "Schedule Adherence Report":
    {
        jp: "スケジュール追跡レポート",
        en: "Schedule Adherence Report"
    },
    "to":
    {
        jp: "まで",
        en: "to"
    },
    "To Date":
    {
        jp: "現在まで",
        en: "To Date"
    },
    "Report":
    {
        jp: "レポート",
        en: "Report"
    },
    "Vertical":
    {
        jp: "部門",
        en: "Vertical"
    },
    "The Audit has been scheduled and Mail notification sent to respective stake holders":
    {
        jp: "監査はスケジュールされ、それぞれのに関係者にメール通知が送信されました",
        en: "The Audit has been scheduled and Mail notification sent to respective stake holders"
    },
    "The Audit schedule has been updated successfully":
    {
        jp: "監査スケジュールが正常に更新されました",
        en: "The Audit schedule has been updated successfully"
    },
    "The Audit Report has been generated and sent to the Auditee for Approval":
    {
        jp: "監査報告書が作成され、承認のために被監査人に送付されました",
        en: "The Audit Report has been generated and sent to the Auditee for Approval"
    },
    "The Audit has been closed without NCs and notification sent to Auditee":
    {
        jp: "NCなしで監査が終了し、被監査人に通知が送信されました",
        en: "The Audit has been closed without NCs and notification sent to Auditee"
    },
    "Audit Report has been Accepted and sent to responsible person for necessary actions":
    {
        jp: "監査報告が承認され、必要な措置について担当者に送付されました",
        en: "Audit Report has been Accepted and sent to responsible person for necessary actions"
    },
    "Audit Report has been Rejected and sent back to the Auditor for review":
    {
        jp: "監査報告は拒否され、レビューのために監査員に差し戻されました",
        en: "Audit Report has been Rejected and sent back to the Auditor for review"
    },
    "The Actions has been sent to the Auditee for Approval":
    {
        jp: "措置は承認のために被監査人に送信されました",
        en: "The Actions has been sent to the Auditee for Approval"
    },
    "The Actions has been sent for Approval":
    {
        jp: "措置は承認され、確認のためにに送られました。",
        en: "The Actions has been sent for Approval"
    },
    "The Actions has been accepted and sent to the Auditor for final approval":
    {
        jp: "措置は承認され、最終承認のために監査員に送付されました",
        en: "The Actions has been accepted and sent to the Auditor for final approval"
    },
    "The Actions are rejected and sent back to the responsible for review":
    {
        jp: "措置は却下され、レビューのため担当者に差し戻されました",
        en: "The Actions are rejected and sent back to the responsible for review"
    },
    "The Actions has been accepted and the NC is closed":
    {
        jp: "措置が受け入れられ、NCがクローズされました",
        en: "The Actions has been accepted and the NC is closed"
    },
    "The Actions are rejected and sent back to the responsible for review":
    {
        jp: "措置は却下され、レビューのため担当者に差し戻されました",
        en: "The Actions are rejected and sent back to the responsible for review"
    },
    "The Actions has been accepted and the NC is closed":
    {
        jp: "措置が受け入れられ、NCがクローズされました",
        en: "The Actions has been accepted and the NC is closed"
    },
    "The Actions are rejected and sent back to the responsible for review":
    {
        jp: "アクションは却下され、レビューのため担当者に差し戻されました",
        en: "The Actions are rejected and sent back to the responsible for review"
    },
    "Thank you! Your feedback has been updated":
    {
        jp: "ありがとうございました！ あなたのフィードバックは更新されました",
        en: "Thank you! Your feedback has been updated"
    },
    "Audit Report has been Accepted and sent to responsible person for necessary actions":
    {
        jp: "監査報告が承認され、必要な措置について担当者に送付されました",
        en: "Audit Report has been Accepted and sent to responsible person for necessary actions"
    },
    "Audit Report has been Rejected and sent back to the Auditor for review":
    {
        jp: "監査報告は拒否され、レビューのために監査員に差し戻されました",
        en: "Audit Report has been Rejected and sent back to the Auditor for review"
    },
    "The Audit Report has been accepted already on":
    {
        jp: "監査報告は既に承認されています",
        en: "The Audit Report has been accepted already on"
    },
    "The Audit Report has been rejected already on":
    {
        jp: "監査報告は既に却下されています",
        en: "The Audit Report has been rejected already on"
    },
    "The Actions has been accepted and sent to the Auditor for final approval":
    {
        jp: "措置は承認され、最終承認のために監査員に送付されました",
        en: "The Actions has been accepted and sent to the Auditor for final approval"
    },
    "The Actions are rejected and sent back to the responsible for review":
    {
        jp: "措置は拒否され、レビューのため担当者に差し戻されました",
        en: "The Actions are rejected and sent back to the responsible for review"
    },
    "The Actions has been accepted already on":
    {
        jp: "措置は既に承認されています",
        en: "The Actions has been accepted already on"
    },
    "The Actions has been rejected already on":
    {
        jp: "措置は既に却下されています",
        en: "The Actions has been rejected already on"
    },
    "The Actions has been accepted and the NC is closed":
    {
        jp: "措置が受け入れられ、NCがクローズされました",
        en: "The Actions has been accepted and the NC is closed"
    },
    "The Actions are rejected and sent back to the responsible for review":
    {
        jp: "措置は却下され、レビューのため担当者に差し戻されました",
        en: "The Actions are rejected and sent back to the responsible for review"
    },
    "Pending-belowtarget":
    {
        jp: "保留中 - ターゲットの下回る",
        en: "Pending-belowtarget"
    },
    "Pending":
    {
        jp: "保留中",
        en: "Pending"
    },
    "Pending-withintarget":
    {
        jp: "保留中 - ターゲット内",
        en: "Pending-withintarget"
    },
    "Pending-abovetarget":
    {
        jp: "保留中 - ターゲットの上回る",
        en: "Pending-abovetarget"
    },
    "Submitted":
    {
        jp: "提出済み",
        en: "Submitted"
    },
    "Issue Description":
    {
        jp: "問題の記述",
        en: "Issue Description"
    },
    //"Root Cause":
    //{
    //    jp: "根本原因",
    //    en: "Root Cause"
    //},
    //"Corrective Action":
    //{
    //    jp: "是正処置（再発防止対策)",
    //    en: "Corrective Action"
    //},
    "Created by":
    {
        jp: "作成者",
        en: "Created by"
    },
    "Approved by":
    {
        jp: "承認者",
        en: "Approved by"
    },
    "Checked by":
    {
        jp: "審査者",
        en: "Checked by"
    },
    "Target Date":
    {
        jp: "対策実施日/対策予定日",
        en: "Target Date"
    },
    "Responsible":
    {
        jp: "担当者",
        en: "Responsible"
    },
    "Horizontal Deployment":
    {
        jp: "水平展開",
        en: "Horizontal Deployment"
    },
    "Applicable Status":
    {
        jp: "該当するステータス",
        en: "Applicable Status"
    },
    "Audit Details":
    {
        jp: "監査詳細",
        en: "Audit Details"
    },
    "Rejected on":
    {
        jp: "拒否された日付",
        en: "Rejected on"
    }
    ,
    "Rejected On":
    {
        jp: "拒否された日付",
        en: "Rejected On"
    }
    ,
    "Accepted by Auditee on":
    {
        jp: "～を被監査人によって受け入れられた",
        en: "Accepted by Auditee on"
    },
    "Accepted by Auditor on":
    {
        jp: "～を監査員によって受け入れられた",
        en: "Accepted by Auditor on"
    },
    "Objective Evidence":
    {
        jp: "客観的な証拠",
        en: "Objective Evidence"
    },
    "Review Auditee":
    {
        jp: "被監査人見直し",
        en: "Review Auditee"
    },
    "Is this Non Conformity applicable to your department":
    {
        jp: "この不適合はあなたの部署に該当しますか？",
        en: "Is this Non Conformity applicable to your department"
    },
    "Yes":
    {
        jp: "はい",
        en: "Yes"
    },
    "No":
    {
        jp: "いいえ",
        en: "No"
    },
    "History":
    {
        jp: "履歴",
        en: "History"
    },
    "Audit Date":
    {
        jp: "監査日",
        en: "Audit Date"
    },
    "Overall status monthly wise":
    {
        jp: "月次別全体ステータス",
        en: "Overall status monthly wise"
    },
    "Overall Status":
    {
        jp: "全体の状況",
        en: "Overall Status"
    },
    "Number of Audits":
    {
        jp: "監査数",
        en: "Number of Audits"
    },
    "Actual":
    {
        jp: "実績",
        en: "Actual"
    },
    "total entries":
    {
        jp: "トータルエントリー",
        en: "total entries"
    },
    "Plan":
    {
        jp: "計画",
        en: "Plan"
    },
    "Home":
    {
        jp: "ホーム",
        en: "Home"
    }
    ,
    "Not Started":
    {
        jp: "始まっていない",
        en: "Not Started"
    }
    ,
    "Pending with auditee":
    {
        jp: "承認待ち",
        en: "Pending with auditee"
    }
    ,
    "Pending with auditor":
    {
        jp: "承認待ち",
        en: "Pending with auditor"
    }
    ,
    "NC CAPA Status Report":
    {
        jp: "NC CAPAステータスレポート",
        en: "NC CAPA status Report"
    }
    ,
    "Rejected Comments":
    {
        jp: "拒否コメント",
        en: "Rejected Comments"
    }
    ,
    "S.NO":
    {
        jp: "数",
        en: "S.NO"
    },
    "Comments":
    {
        jp: "コメント",
        en: "Comments"
    }
    ,
    "Rejected by":
    {
        jp: "拒否された人",
        en: "Rejected by"
    },
    "Major":
    {
        jp: "メジャー",
        en: "Major"
    }
    ,
    "Minor":
    {
        jp: "マイナー",
        en: "Minor"
    },
    "With in":
    {
        jp: "以内",
        en: "Within"
    },
    "Within 30  days":
    {
        jp: "30日未満",
        en: "Within 30  days"
    },
    "More than 30 days":
    {
        jp: "30日以上",
        en: "More than 30 days"
    },
    "Days":
    {
        jp: "日々",
        en: "Days"
    },
    "More than":
    {
        jp: "より多い",
        en: "More than"
    }
    ,
    "Type of Observation":
    {
        jp: "評価タイプ",
        en: "Type of Observation"
    },

    "Document Reference":
    {
        jp: "規格＆要求事項",
        en: "Document Reference"
    },
    "Audit Report Submitted":
    {
        jp: "監査レポートが提出された",
        en: "Audit Report Submitted"
    },
    "Audit Report Rejected":
    {
        jp: "監査レポートがリジェクトされた",
        en: "Audit Report Rejected"
    },
    "By":
    {
        jp: "よって",
        en: "By"
    },
    "On":
    {
        jp: "関して",
        en: "On"
    },
    "Audit Schedule Updated":
    {
        jp: "監査スケジュールが更新された",
        en: "Audit Schedule Updated"
    },
    "Audit Report Accepted":
    {
        jp: "監査レポートが受理された",
        en: "Audit Report Accepted"
    }
    ,
    "Actions Submitted":
    {
        jp: "是正処置が提出された",
        en: "Actions Submitted"
    },
    "Actions Accepted":
    {
        jp: "是正処置が受理された",
        en: "Actions Accepted"
    },
    "Actions Rejected":
    {
        jp: "是正処置がリジェクトされた",
        en: "Actions Rejected"
    },
    "Actions Rejected by Auditee":
    {
        jp: "是正処置がリジェクトされたよって受理された",
        en: "Actions Rejected by Auditee"
    },
    "Actions Rejected by Auditor":
    {
        jp: "是正処置がリジェクトされたよって受理された",
        en: "Actions Rejected by Auditor"
    },
    "Actions Accepted by Auditee":
    {
        jp: "是正処置が被監査人によって受理された",
        en: "Actions Accepted by Auditee"
    },
    "Actions Accepted by Auditor":
    {
        jp: "是正処置が監査員によって受理された",
        en: "Actions Accepted by Auditor"
    },
    "by":
    {
        jp: "よって",
        en: "By"
    },
    "on":
    {
        jp: "関して",
        en: "On"
    },
    "Accepted and Completed": {
        jp: "了承済 そして 完了済",
        en: "Accepted and Completed"
    },
    "Total":
    {
        jp: "合計",
        en: "Total"
    },
    "January":
    {
        jp: "1月",
        en: "January"
    },
    "February":
    {
        jp: "2月",
        en: "February"
    },
    "March":
    {
        jp: "3月",
        en: "March"
    },
    "April":
    {
        jp: "4月",
        en: "April"
    },
    "May":
    {
        jp: "5月",
        en: "May"
    },
    "June":
    {
        jp: "6月",
        en: "July"
    },
    "July":
    {
        jp: "7月",
        en: "July"
    },
    "August":
    {
        jp: "8月",
        en: "August"
    },
    "September":
    {
        jp: "9月",
        en: "September"
    },
    "October":
    {
        jp: "10月",
        en: "October"
    },
    "November":
    {
        jp: "11月",
        en: "November"
    },
    "December":
    {
        jp: "12月",
        en: "December"
    },
    "Number of NC":
    {
        jp: "NC数（含むOFI)",
        en: "Number of NC"
    },
    "User Manual":
    {
        jp: "'ユーザーマニュアル",
        en: "User Manual"
    },
    "Auditor List": {
        jp: "監査員 リスト",
        en: "Auditor List"
    },
    "Delete": {
        jp: "削除",
        en: "Delete"
    }
    ,
    "Are you sure you want to delete this scheduled audit?": {
        jp: "このスケジュールされた監査を削除してもよろしいですか？",
        en: "Are you sure you want to delete this scheduled audit?"
    }
    ,
    "Cancel": {
        jp: "キャンセル",
        en: "Cancel"
    }
    ,
    "Accepted and Completed": {
        jp: "完了",
        en: "Accepted and Completed"
    }
    ,
    "Number of NC": {
        jp: "NCの数",
        en: "Number of NC"
    },
    "Total": {
        jp: "合計",
        en: "Total"
    },
    "First Name": {
        jp: "名前",
        en: "First Name"
    },
    "Last Name": {
        jp: "姓",
        en: "Last Name"
    },
    "Short Id": {
        jp: "ID",
        en: "Short Id"
    },
    "Email Id": {
        jp: "電子メールID",
        en: "Email Id"
    },
    "Level": {
        jp: "レベル",
        en: "Level"
    },
    "Add New Auditor": {
        jp: "新しい監査人を追加する",
        en: "Add New Auditor"
    },
    "Add New Lead Auditor": {
        jp: "新しい主任審査員の追加",
        en: "Add New Lead Auditor"
    },
    "Are you sure you want to delete the auditor?": {
        jp: "監査人を削除してもよろしいですか？",
        en: "Are you sure you want to delete the auditor?"
    },
    "Auditor Added Successfully": {
        jp: "リード監査役が正常に追加されました",
        en: "Auditor Added Successfully"
    },
    "Auditor Updated Successfully": {
        jp: "主任審査員が更新されました",
        en: "Auditor Updated Successfully"
    },
    "Auditor Deleted Successfully": {
        jp: "リード監査役が正常に削除された",
        en: "Auditor Deleted Successfully"
    },
    "CAPA": {
        jp: "是正処置・予防処置",
        en: "CAPA"
    },
    "CAPA has been saved as Draft": {
        jp: "是正処置・予防処置 下書きとして保存されました",
        en: "CAPA has been saved as Draft"
    },
    "Audit Place": {
        jp: "監査場所",
        en: "Audit Place"
    },
    "Location": {
        jp: "場所",
        en: "Location"
    },
    "Audit Place/Location": {
        jp: "監査場所",
        en: "Audit Place/Location"
    },
    "Computer Skills": {
        jp: "コンピュータのスキル",
        en: "Computer Skills"
    },
    "Internal Audit Process": {
        jp: "内部監査プロセス",
        en: "Internal Audit Process"
    },
    "Core Tools": {
        jp: "コアツール",
        en: "Core Tools"
    },
    "Customer Specifie Requirements": {
        jp: "顧客仕様の要件",
        en: "Customer Specifie Requirements"
    },
    "IATF Rules 4th Edition": {
        jp: "IATFルール第4版",
        en: "IATF Rules 4th Edition"
    },
    "Secretariat Office Know how": {
        jp: "事務局",
        en: "Secretariat Office Know how"
    },
    "External Audit Planning": {
        jp: "外部監査計画",
        en: "External Audit Planning"
    },
    "Environmental Laws": {
        jp: "環境法",
        en: "Environmental Laws"
    },
    "Overall Competence": {
        jp: "全体的な能力",
        en: "Overall Competence"
    },
    "Quality Manual Know how": {
        jp: "品質マニュアル",
        en: "Quality Manual Know how"
    },
    "Action": {
        jp: "アクション",
        en: "Action"
    },
    "New Auditor List": {
        jp: "新しい監査人リスト",
        en: "New Auditor List"
    },
    "Confirm": {
        jp: "確認する",
        en: "Confirm"
    },
    "Audits Last Year": {
        jp: "昨年の監査",
        en: "Audits Last Year"
    },
    "Audits This Year": {
        jp: "今年の監査",
        en: "Audits This Year"
    },
    "Total Audit Hours": {
        jp: "総監査時間",
        en: "Total Audit Hours"
    },
    "View Area Audited": {
        jp: "監査エリアを表示",
        en: "View Area Audited"
    },
    "Areas Audited": {
        jp: "監査対象地域",
        en: "Areas Audited"
    },

    "Audit Result": {
        jp: "工程監査結果",
        en: "Audit Result"
    },
    "Summary": {
        jp: "結果",
        en: "Summary"
    },
    "Content Description": {
        jp: "主な確認内容",
        en: "Content Description"
    },
    "Category": {
        jp: "区分",
        en: "Category"
    },
    "Audit Item": {
        jp: "監査項目",
        en: "Audit Item"
    },
    "Rank": {
        jp: "判定",
        en: "Rank"
    },

    "Issue/Remarks": {
        jp: "問題点・特記事項",
        en: "Issue/Remarks"
    },
    "Issue Details": {
        jp: "内容",
        en: "Issue Details"
    },
    "Issues": {
        jp: "指摘項目",
        en: "Issues"
    },

    "Root Cause": {
        jp: "発生原因",
        en: "Root Cause"
    },
    "Corrective Action": {
        jp: "対策・改善実施内容",
        en: "Corrective Action"
    },
    "Recurrence Prevention": {
        jp: "再発防止策",
        en: "Recurrence Prevention"
    },
    "Implementation Date/Plan": {
        jp: "実施日程・計画",
        en: "Implementation Date/Plan"
    } ,
    "Audit Process": {
        jp: "工程名",
        en: "Audit Process"
    },
    "Audit Staff": {
        jp: "監査スタッフ",
        en: "Audit Staff"
    },
    "Trainee": {
        jp: "研修生",
        en:"Trainee"
    },
    "Audit Support": {
        jp: "監査者",
        en: "Audit Support"
    },
    "Priority": {
        jp: "ランク",
        en: "Priority"
    },
    "Priority A": {
        jp: "ランク A",
        en: "Priority A"
    },
    "Priority B": {
        jp: "ランク B",
        en: "Priority B"
    },
    "Priority C": {
        jp: "ランク C",
        en: "Priority C"
    },
    "Priority D": {
        jp: "ランク D",
        en: "Priority D"
    },
    "Issue No": {
        jp: "指摘 No",
        en: "Issue No"
    },
    "Attachments": {
        jp: "添付",
        en: "Attachments"
    },
    "Documentation Update Necessity": {
        jp: "関連書類の改訂可否",
        en: "Documentation Update Necessity"
    },
    "(eg. Control Plan/PFMEA/Work instructions/etc.)": {
        jp: "（例：コントロールプラン、PFMEA、作業標準等）",
        en: "(eg. Control Plan/PFMEA/Work instructions/etc.)"
    },
    "Issue": {
        jp: "指摘",
        en: "Issue"
    },
    //"Process Audit - Regular": {
    //    jp: "定期工程監査",
    //    en:"Process Audit - Regular"
    //},
    //"Process Audit - Extraordinary": {
    //    jp: "臨時工程監査",
    //    en:"Process Audit - Extraordinary"
    //},
}







$(document).ready(function () {

    Tooltips(); // Tooltip
    overallTableScroll(); //overallTableScroll


    $('.Languagepicker').selectpicker();


    $('.Languagepicker').on('change', function (ev) {
        var selected = $(this).find("option:selected").val();
        var ApiFunc = '../Home/LanguageChanger/';

        var input = JSON.stringify({ "input": selected });

        JsonPostMethod(ApiFunc, input, '', function (data) {

            Conversion(selected);
            ev.preventDefault();
        });


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
}

// Shrink Table
function ShrinkTable() {



}

// Close minizined table

function CloseEditSchedule() {

    window.history.pushState("object or string", "Title", "?" + "auditrefno=No");
    $(".tblsmall").removeClass("tableMinimized col-lg-3");
    $('[data-label]').css('display', '');
    $('[data-minilabel]').css('display', '');
    $(".tblsmalledit").hide();
    $("tr").removeClass("activegrey");
    $("body").removeClass("bodyoveflow");
    overallTableScrollCustomized();


  $(".tableshrink").addClass("table-word-break");
    $('.tableshrink tr td:first-child').attr('style', 'width: 6% !important');

    $('.tableshrink1 tr td:nth-child(6)').attr('style', 'width: 2% !important');
    $('.tableshrink1 tr td:nth-child(7)').attr('style', 'width: 2% !important');
    $('.tableshrink1 tr td:nth-child(8)').attr('style', 'width: 2% !important');
    $('.tableshrink tr td:nth-child(9)').attr('style', 'width: 2% !important');
    $('.tableshrink1 tr td:nth-child(10)').attr('style', 'width: 2% !important');


    $('.tableshrink2 tr td:nth-child(10)').attr('style', 'width: 2% !important');

    pagenation = "";
    $(".removetd").css('display', '');
   
  CustomscrollBar();
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

function overallTableScroll() {

    $(".tblsmall").mCustomScrollbar({

        scrollbarPosition: "outside",
        theme: "minimal-dark",

        callbacks: {
            onScroll: function () {
                openSelect($(".js-example-tags"));
                openSelect($(".js-example-tags"));

            }
        }
    });
    $height = $(window).height() - 320;

    $(".tblsmall ").height($height);

}

function overallTableScrollCustomized() {

    $(".tblsmall").mCustomScrollbar({

        scrollbarPosition: "outside",
        theme: "minimal-dark",

        callbacks: {
            onScroll: function () {
                openSelect($(".js-example-tags"));
                openSelect($(".js-example-tags"));

            }
        }
    });
    $height = $(window).height() - 330;

    $(".tblsmall ").height($height);

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





//MenuRemoveClass

function MenuRemoveClass() {
    $("#AuditTrackerMenu").removeClass("active");
    $("#AuditschedulingMenu").removeClass("active");
    $("#AuditReportingMenu").removeClass("active");
    $("#AuditAuditorMenu").removeClass("active");
    $("#AuditAuditeeMenu").removeClass("active");
    $("#AuditReviewMenu").removeClass("active");
    $("#AuditReviewCAPAMenu").removeClass("active");
    $("#AuditReviewAuditorMenu").removeClass("active");
    $("#AuditReviewAuditeeMenu").removeClass("active");
    $("#AuditReviewFollowupMenu").removeClass("active");
    $("#AuditAnalysisMenu").removeClass("active");

}

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
    else if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "svg") {
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

function PanelStatus(data) {
    $('#Stage1').removeClass('current');
    $('#Stage2').removeClass('current');
    $('#Stage3').removeClass('current');
    $('#Stage4').removeClass('current');
    $('#' + data).addClass('current');
}

function DownloadManuals() {
    var filepath, name;

    if ($('.Languagepicker').val() == "en") {
        filepath = 'D:\\DTAQMPortal Folder\\Files\\Manual\\DTA QM-IAT Manual v01(E).pdf';
        name = 'DTA QM-IAT Manual v01(E).pdf';
        window.location.href = '../Home/DownloadFile?url=' + filepath + '&filename=' + name + ''

    }
    else if ($('.Languagepicker').val() == "jp") {
        filepath = 'D:\\DTAQMPortal Folder\\Files\\Manual\\DTA QM-IAT Manual v01(J).pdf';
        name = 'DTA QM-IAT Manual v01(J).pdf';
        window.location.href = '../Home/DownloadFile?url=' + filepath + '&filename=' + name + ''

    }
    else {
    }
}