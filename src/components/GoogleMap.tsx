import Image from "next/image";

export default function GoogleMap() {
  return (
    <>
      <div className="google-maps relative pb-8 w-full overflow-hidden">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 text-center">
          The Venue: 
        </h2>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Alpine Golf Resort Chiangmai</h2><br/>

        {/* ภาพจาก Google Maps Street View */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/thevenue.webp"
            alt="Alpine Golf Resort Chiangmai"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover max-w-full h-auto"
          />
        </div>
        <br/>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.1348113958643!2d99.17468877488396!3d18.70278166358362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da4555555070b9%3A0x39ba5517d399a8f5!2z4Lit4Lix4Lil4LmE4Lie4LiZ4LmM4LiB4Lit4Lil4LmM4Lif4Lij4Li14Liq4Lit4Lij4LmM4LiXIOC5gOC4iuC4teC4ouC4h-C5g-C4q-C4oeC5iA!5e0!3m2!1sth!2sth!4v1746537527873!5m2!1sth!2sth"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="font-bold">Alpine Golf Resort Chiangmai</p>
      <p className="font-normal">
      158 Moo 3, Banthi-On Tai Road, Banthi District, Lamphun 51180
      </p>
      <p>(Approximately 30 minutes from Chiang Mai city)</p>
      <a
        href="https://maps.app.goo.gl/2YAqoNN5eMAa3ovq8"
        target="_blank"
        rel="noreferrer"
        className="outline outline-2 outline-offset-2 rounded-full px-4 py-2 font-semibold w-full text-center mt-6"
      >
        Direction
      </a>
      <br/><br/>
    </>
  );
}
