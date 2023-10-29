function 台帳転記() {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let 転記設定シート = spreadsheet.getSheetByName("転記設定");
  let 入力フォームシート = spreadsheet.getSheetByName("入力フォーム");
  let 管理台帳シート = spreadsheet.getSheetByName("管理台帳");
  // 転記設定シートからデータを取得
  let 設定データ = 転記設定シート.getRange(2, 1, 転記設定シート.getLastRow() - 1, 2).getValues();
  // 入力フォームシートから名前付き範囲のデータを取得
  let 名前付き範囲 = 入力フォームシート.getNamedRanges();
  let 名前データ = [];
  for (let i = 0; i < 名前付き範囲.length; i++) {
    let 名前 = 名前付き範囲[i].getName();
    let 値 = 名前付き範囲[i].getRange().getValue();
    名前データ.push([名前, 値]);
  }
  // 配列データを生成
  let 配列データ = [];
  let 行データ = [];
  for (let i = 0; i < 設定データ.length; i++) {
    for (let j = 0; j < 名前データ.length; j++) {
      if (設定データ[i][0] === 名前データ[j][0]) {
        行データ.push(名前データ[j][1]);
      }
    }
  }
  配列データ.push(行データ)
console.log(配列データ.join());
  // 管理台帳シートにデータを貼り付け
  管理台帳シート.getRange(管理台帳シート.getLastRow() + 1,1,1,行データ.length).setValues(配列データ);
}
