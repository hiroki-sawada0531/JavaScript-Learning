Promise.all([
    asyncProcess('トクジロウ'),
    asyncProcess('ニンザブロウ'),
    asyncProcess('リンリン')
]).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー: ${error}`);
    }
);