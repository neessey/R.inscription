'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import CustomComboBox from "@/components/ui/CustomComboBox";

export default function CardDemo() {
  const [document, setDocument] = useState("")
  const [date, setDate] = useState("")
  const [matricule, setMatricule] = useState("")
  const router = useRouter()

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#eee", fontFamily: "Verdana, Geneva, Tahoma, sans-serif", fontSize: "1.15rem" }}
    >
      {/* Logos en haut à gauche et à droite */}
      <div className="w-full flex justify-between items-start px-8 pt-6">
        <img src="/LOGO_ERSYS_PRIMARY.png" alt="Logo gauche" className="h-26 w-auto" />
        <img src="/LOGOMETFPA-removebg-preview.png" alt="Logo droit" className="h-30 w-auto" />
      </div>

      {/* Titre de bienvenue */}
      <div
        className="w-full flex flex-col items-center mt-2 mb-2"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        <span className="text-7xl font-bold text-[#4F3130] leading-tight">Bienvenue</span>
        <span className="text-5xl text-[#4F3130] mt-1">Sur notre plateforme d'impression de reçu</span>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <Card
          className="w-full max-w-2xl p-1 rounded-2xl shadow-xl"
          style={{ backgroundColor: "#eee" }}
        >
          <div className="rounded-2xl bg-white/80 backdrop-blur-[2px]">
            <CardHeader className="text-center">
              <CardDescription className="text-center text-[#4F3130] text-xl font-semibold px-4 py-2">
                Veuillez remplir les informations ci-dessous pour imprimer votre reçu d'inscription.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form
                className="relative p-8 rounded-xl flex flex-col items-center"
                style={{ backgroundColor: "#eee" }}
              >
                <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
                  <div className="w-full">
                    <CustomComboBox
                      label="Choisissez le document à imprimer"
                      options={["Reçu d'inscription"]}
                      value={document}
                      onChange={setDocument}
                    />
                  </div>

                  <div className="w-full">
                    <CustomComboBox
                      label="Année scolaire"
                      options={["2024-2025", "2023-2024", "2022-2023", "2021-2022", "2020-2021", "2019-2020"]}
                      value={date}
                      onChange={setDate}
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-1 text-xl font-semibold text-[#4F3130]">Matricule</label>
                    <input
                      type="text"
                      placeholder="Entrez votre matricule"
                      value={matricule}
                      onChange={e => setMatricule(e.target.value)}
                      className="border border-[#D8956A] rounded px-4 py-2 bg-white text-[#4F3130] placeholder:text-[#4F3130] w-full"
                    />
                  </div>

                </div>
              </form>
            </CardContent>

            <CardFooter className="flex-col gap-2 mt-6 mb-6">
              <Button
                type="button"
                className="w-full py-8 text-lg font-bold bg-black hover:bg-gray-800 text-white"
                onClick={() => {
                  router.push('/recu')
                }}
              >
                Impression du reçu
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>

      {/* Pied de page */}
      <footer className="w-full text-center py-4 bg-[#4F3130] text-[#E1B07E] text-base mt-8">
        &copy; {new Date().getFullYear()} METFPA. Tous droits réservés.
      </footer>
    </div>
  )
}
