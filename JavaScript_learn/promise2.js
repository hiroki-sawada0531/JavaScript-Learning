asyncProcess('トクジロウ')
.then(
    response => {
        console.log(response);
        return asyncProcess('ニンサブロウ')
    }
)
.then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー: ${error}`);
    }
);