import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from "./in-orbit-icon";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] w-full px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: 200 }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou{" "}
            <span className="font-semibold text-zinc-100">8</span> de{" "}
            <span className="font-semibold text-zinc-100">15</span> metas nessa
            semana.
          </span>
          <span>58%</span>
        </div>

        <Separator />

        <div className="flex gap-3 flex-wrap">
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Meditar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Nadar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Praticar esportes
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Estudar React
          </OutlineButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-medium text-xl">Sua semana</h2>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Domingo{" "}
              <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Segunda{" "}
              <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Terça{" "}
              <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou{" "}
                  <span className="text-zinc-100">"Acordar cedo"</span> às{" "}
                  <span className="text-zinc-100">09:34h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
