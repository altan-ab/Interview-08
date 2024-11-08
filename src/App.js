import React, { useState } from 'react'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  )
}

const ValidatedForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [accounts, setAccounts] = useState([
    { username: 'NamıkKorona1', password: '1234567' },
  ])

  const onSubmit = (e) => {
    e.preventDefault()

    //if koşulu içine return eklemezsem alt koşullara devam ediyor.-->
    if (username.length > 20 || password.length > 20) {
      alert('Username ve password 20 karakteri geçemez.')
      return
    }

    if (username.length < 6 || password.length < 6) {
      alert('Username ve password 6 karakterden uzun olmalıdır.')
      return
    }

    const controlAccount = accounts.find(
      (account) =>
        account.username === username && account.password === password
    )

    if (controlAccount) {
      alert(`Login başarılı, Selam ${username}.`)
      resetForm()
    } else {
      const newAccount = { username, password }
      setAccounts([...accounts, newAccount])
      alert(`Yeni hesap oluşturuldu, merhaba ${username}.`)
      resetForm()
    }
  }

  const resetForm = () => {
    setUsername('')
    setPassword('')
  }

  const handleUsernameChange = (e) => {
    const input = e.target.value
    if (input.length <= 20) {
      setUsername(input)
    } else {
      alert('Username 20 karakteri geçemez.')
    }
  }

  const handlePasswordChange = (e) => {
    const input = e.target.value
    if (input.length <= 20) {
      setPassword(input)
    } else {
      alert('Password 20 karakteri geçemez.')
    }
  }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: 'solid',
        padding: 10,
      }}
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      <input
        value={username}
        type="text"
        onChange={handleUsernameChange}
        style={{ marginBottom: 5, border: 'solid,1px' }}
        placeholder=" enter your username"
      />
      <input
        value={password}
        type="text"
        onChange={handlePasswordChange}
        style={{ marginBottom: 10, border: 'solid,1px' }}
        placeholder=" enter your password"
      />
      <button
        style={{
          alignSelf: 'center',
          border: 'solid,1px,',
          padding: 2,
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default App
