srequire('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const usernameArray of args) {
    combinedObject.users.push(...usernameArray);
  }

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = { combineUsers };
