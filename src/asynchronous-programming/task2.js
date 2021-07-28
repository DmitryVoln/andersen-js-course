function parseJSON(jsonStr, successCb, failureCb) {
  try {
    let jsonParsed = JSON.parse(jsonStr);
    if (jsonParsed) {
      return successCb(jsonParsed);
  }
  } catch(err) {
    return failureCb(err);
  }
}

function successCb(res) {
  console.log('Success parse!');
  return res;
}

function failureCb(err) {
  console.log('Failure parse');
  return err;
}

export { parseJSON, successCb, failureCb };
