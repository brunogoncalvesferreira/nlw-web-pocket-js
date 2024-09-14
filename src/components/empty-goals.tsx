import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src="logo.svg" alt="Logo In.Orbit" />

      <img src="illustration_lets.svg" alt="Imagem de ilustração" />

      <p className="text-zinc-400 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal{" "}
        <span className="underline">cadastrar um</span> agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
