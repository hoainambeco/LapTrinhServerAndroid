exports.SpxRemoveCircuflex = (_strConvert)=> {
    _strConvert = _strConvert.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    _strConvert = _strConvert.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    _strConvert = _strConvert.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    _strConvert = _strConvert.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    _strConvert = _strConvert.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    _strConvert = _strConvert.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    _strConvert = _strConvert.replace(/đ/g, 'd');
    _strConvert = _strConvert.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    _strConvert = _strConvert.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    _strConvert = _strConvert.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    _strConvert = _strConvert.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    _strConvert = _strConvert.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    _strConvert = _strConvert.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    _strConvert = _strConvert.replace(/Đ/g, 'D');
    _strConvert = _strConvert.replace(/ /g, '-');
    _strConvert = _strConvert.replace(/[^\.A-Za-z0-9\-]+/g, '');
    _strConvert = _strConvert.replace(/-+/g, '-');
    return _strConvert.toLowerCase();
}
