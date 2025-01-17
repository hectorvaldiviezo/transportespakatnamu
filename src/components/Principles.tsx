import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Principles() {
  const principles = [
    { title: "Calidad", description: "Nos esforzamos por ofrecer servicios de la más alta calidad." },
    { title: "Responsabilidad Social", description: "Comprometidos con el bienestar de nuestra comunidad y el medio ambiente." },
    { title: "Oportunidad", description: "Brindamos soluciones oportunas a las necesidades de nuestros clientes." },
    { title: "Competencia", description: "Contamos con un equipo altamente competente y capacitado." },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Principios Fundamentales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

