import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { Separator } from "./components/ui/separator";


export function App() {
 
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 🧙‍♂️ no NLW da Rocketseat.
          </span>

          <Separator className="h-6" orientation="vertical"/>

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>        
        <main className="flex-1 p-6 flex gap-6">
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-rows-2 gap-4 flex-1">
              <Textarea
                className="resize-none p-5 leading-relaxed" 
                placeholder="Inclua o propmt para a IA..."
              />
              <Textarea 
                placeholder="Resultado gerado pela IA..." 
                readOnly
              />
            </div>
            <p className="text-sm text-muted-foreground">Lembre-se: voçê pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu propt para adicionar a transcrição do video selecionado.</p>
          </div>
          <aside className="w-80 space-y-6">
            <form className="space-y-6">
              <label 
                htmlFor="video" 
                className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
              >
                <FileVideo />
                Selecione um vídeo
              </label>
              <input type="file" id="video" accept="video/mp4" className="sr-only" />
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="transcription_prompt">Prompt de Transcrição</Label>
                <Textarea 
                  className="h-20 leading-relexed resize-none" 
                  id="transcription_prompt" 
                  placeholder="Inclua palavras-chave mencionadas no vídeo separadas por parenteses (,)"
                />
              </div>
              <Button type="submit" className="w-full">
                Carregar vídeo
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </form>
            <Separator />
            <div className="space-y-2">
                <Label>Prompt</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um prompt..."/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="title">Título do YouTube</SelectItem>
                    <SelectItem value="description">Descrição do YouTube</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            <Separator />
            <form action="" className="space-y-6">
              <div className="space-y-2">
                <Label>Modelo</Label>
                <Select disabled defaultValue="gpt3.5">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  </SelectContent>
                </Select>
                <span className="block text-xs text-muted-foreground italic">
                  Você poderá customizar essa opção em breve.
                </span>
              </div>
              <Separator />
              <div className="space-y-4">
                <Label>Temperatura</Label>
                <Slider
                  min={0}
                  max={1}
                  step={0.1}
                />

                <span className="block text-xs text-muted-foreground italic leading-relaxed">
                  Valores mais autos tendem a deixar resultados mais criativos e com possíveis erros.
                </span>
                <Separator />
                <Button type="submit" className="w-full">
                  Executar
                  <Wand2 className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </aside>
        </main>
    </div>
  )
      }


