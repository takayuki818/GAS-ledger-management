function 選択行番号取得(){
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let 管理台帳シート = ss.getSheetByName("管理台帳");
  let アクティブセル = 管理台帳シート.getActiveRange();
  let 行 = アクティブセル.getRow();
  // 名前付き範囲「選択行」に行番号を代入
  let 名前付き範囲 = SpreadsheetApp.getActiveSpreadsheet().getRangeByName("選択行");
  名前付き範囲.setValue(行);
}