$(function() {
    const cors = 'https://cors-anywhere.herokuapp.com/';
    $.ajax({
        url:  'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-3E590DD1-66D3-4FFF-A0D6-BE6300E492C6&locationName=%E6%96%B0%E7%AB%B9%E5%B8%82',
        type: "GET",
        dataType: "json",
        success: function(res) {
            console.log(res.records.location[0].locationName

                );
        },
        error: function(error) {
            console.log(error);
        }
    })
})