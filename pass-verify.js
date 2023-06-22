const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123';
  const hash = '$2b$10$PkzkAeSyggFQxQl/9Hbj1eQiPsywjfFvEDvRvBC/vuYWYka5xe4KO';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}
verifyPassword();
