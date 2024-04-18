import { useState, FormEvent } from "react";
import { User } from "../types/User";
import { validate } from "../utils/validade";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<User | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: User = {
      name,
      email,
      agree,
      password,
    };

    const validateErrors = validate(data);

    console.log(data, validateErrors);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setName("");
    setPassword("");
    setEmail("");
    setAgree(false);

    alert("Obrigado por ser inscrever");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="rounded-lg  py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && (
          <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="senha">
          Senha
        </label>
        <input
          type="password"
          placeholder="Digite sua senha"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors?.password && (
          <small className="text-xs text-red-500 mt-1">
            {errors?.password}
          </small>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="rounded-lg  py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
        )}
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Ler os termos
        </a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          {errors?.agree && (
            <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
          )}
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-2 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
}
