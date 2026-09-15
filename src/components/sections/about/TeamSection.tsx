import { Heading } from "@/components/uiwave/Heading";
import { TEAM } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="uw-container uw-section pt-0">
        <Heading
          centered
          badge="Nuestro equipo"
          title="Las personas detrás de la aventura"
          description="Un equipo apasionado por Perú y por crear experiencias inolvidables para cada viajero."
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-heading text-xl tracking-wider text-white">
                  {member.name}
                </h3>
                <span className="font-heading text-sm tracking-wider text-primary">
                  {member.role}
                </span>
                <p className="mt-2 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
