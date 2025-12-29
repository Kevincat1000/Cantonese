import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header/Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <div className="relative h-16 w-auto px-2">
                <div className="text-center">
                  <div className="font-bold leading-tight" style={{
                    fontSize: '24px',
                    color: '#5B6D87',
                    letterSpacing: '0.5px',
                    fontFamily: 'var(--font-lato)',
                  }}>
                    CANTONESE
                  </div>
                  <div className="font-bold leading-tight" style={{
                    fontSize: '16px',
                    color: '#5B6D87',
                    letterSpacing: '2px',
                    fontFamily: 'var(--font-lato)',
                  }}>
                    IN AMERICAS
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <Navigation />
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 48, 87, 0.7), rgba(0, 48, 87, 0.7)), url(https://ext.same-assets.com/2026473150/704387381.jpeg)',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-lato font-bold mb-4">
            Cantonese in Americas
          </h1>
          <p className="text-2xl md:text-3xl font-light">
            Public History · Oral History · Cultural Research
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#2C5266] text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-lato mb-12" style={{ color: '#d6d0ac' }}>
            Introduction
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Since the 17th century, hundreds of thousands of Cantonese migrants from Guangdong's coastal region have crossed the South China Sea and the Pacific through commerce, contract labor, education, and family reunification. They moved back and forth among Hong Kong, Southeast Asia, and North America.
            </p>
            <p>
              This project shifts the focus from a single origin group to a broader question: how Cantonese culture has been carried abroad, transformed, and transmitted across generations. Through oral histories, visual archives, and digital humanities methods, this project documents cultural survival, migration, and memory.
            </p>
            <p>
              <a href="/introduction" className="text-lg text-white underline hover:opacity-80">
                View the full introduction
              </a>
            </p>
          </div>

          {/* Statistics */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-8 tracking-wide">BY THE NUMBERS:</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#8BA888] mb-2 whitespace-nowrap">175+ Years</div>
                <div className="border-b-2 border-dotted border-[#8BA888] mb-4"></div>
                <p className="text-sm">Documented migration since the 1848 Gold Rush.</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8BA888] mb-2 whitespace-nowrap">530,000+</div>
                <div className="border-b-2 border-dotted border-[#8BA888] mb-4"></div>
                <p className="text-sm">U.S. residents speaking Cantonese at home.</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8BA888] mb-2 whitespace-nowrap">30 Million+</div>
                <div className="border-b-2 border-dotted border-[#8BA888] mb-4"></div>
                <p className="text-sm">Descendants in a vast global diaspora.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Service Cards Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Timeline of Cantonese Migration */}
            <div>
              <div className="border-l-4 border-[#84402d] pl-4 mb-6">
                <h3 className="text-3xl font-lato text-[#84402d] mb-2">
                  Timeline of Cantonese Migration
                </h3>
                <p className="text-lg text-[#84402d]">Waves, Networks, and Institutions</p>
              </div>
              <p className="text-gray-700 mb-6">
                Trace the arc of a diaspora that defied borders. From the rugged goldfields of 1848 to the refugee waves of the 20th century, this timeline reveals how a people weathered the storms of exclusion to forge new destinies.
              </p>
              <p className="text-gray-700 mb-6">
                Witness the rise of Chinatowns, the resilience of Huiguan associations, and the silent strength of communities that anchored themselves in foreign soil—rebuilding the concept of "home," one generation at a time.
              </p>
              <Link href="/timeline">
                <Button className="bg-[#84402d] hover:bg-[#6d3424] text-white">
                  View the full article
                </Button>
              </Link>
            </div>

            {/* Cantonese as Linguistic Capital */}
            <div>
              <div className="border-l-4 border-[#7BA3B8] pl-4 mb-6">
                <h3 className="text-3xl font-lato text-[#7BA3B8] mb-2">
                  Cantonese as Linguistic Capital
                </h3>
                <p className="text-lg text-[#7BA3B8]">Power, Hierarchy, and Identity</p>
              </div>
              <p className="text-gray-700 mb-6">
                Language is never just words; it is the currency of power and the architecture of identity. Explore the invisible battlegrounds where Cantonese and Mandarin vie for dominance in schools, policies, and labor markets.
              </p>
              <p className="text-gray-700 mb-6">
                Map the poignant shift of a mother tongue—fading from public squares to the intimate whispers of the kitchen table—and uncover what is lost, what is saved, and what it truly means to sound like where Cantonese comes from.
              </p>
              <Link href="/language">
                <Button className="bg-[#7BA3B8] hover:bg-[#6891A5] text-white">
                  View the full article
                </Button>
              </Link>
            </div>

            {/* Culture Symbols */}
            <div>
              <div className="border-l-4 border-[#2C7565] pl-4 mb-6">
                <h3 className="text-3xl font-lato text-[#2C7565] mb-2">
                  Culture Symbols
                </h3>
                <p className="text-lg text-[#2C7565]">Rituals, Performance, and Resilience</p>
              </div>
              <p className="text-gray-700 mb-6">
                From the ritual pulse of dragon and lion dances and ancestral offerings to the kinetic power of Kung Fu; from the evolution of cuisine—transforming from a survival strategy into global gastronomy—to the Opera stage that preserves the memory of a mobile homeland.
              </p>
              <p className="text-gray-700 mb-6">
                Witness how Cantonese culture reshapes itself, forging a resilient new identity across the seas.
              </p>
              <Link href="/culture">
                <Button className="bg-[#2C7565] hover:bg-[#245F52] text-white">
                  View the full article
                </Button>
              </Link>
            </div>

            {/* Historical Research */}
            <div>
              <div className="border-l-4 border-[#B4A572] pl-4 mb-6">
                <h3 className="text-3xl font-lato text-[#B4A572] mb-2">
                  Historical Research
                </h3>
                <p className="text-lg text-[#B4A572]">Establishing Fact Over Fiction</p>
              </div>
              <p className="text-gray-700 mb-6">
                HAI applies its tried-and-true research methodology to all research projects, regardless of their size, topic, or era—from science and medicine to sports, entertainment, and current events. We consult with you to refine the research question and identify potential repositories and collections including the Library of Congress, National Archives, Smithsonian Institution, as well as federal, state, and local organizations. After exhausting our research pathways, we will provide a thorough report on found documentation and our sources.
              </p>
              <Button className="bg-[#B4A572] hover:bg-[#9A8E5E] text-white">
                Talk to an HAI Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-lato text-[#2C7565] mb-12">HAI News & Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/2026473150/1432826340.jpeg"
                  alt="Voting Rights"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <p className="text-sm text-gray-500 mb-2">AUGUST 5, 2025</p>
                <CardTitle className="text-xl font-lato">
                  FROM SELMA TO THE BALLOT BOX: VOTING RIGHTS ACT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#2C7565] mb-3">HAI INSIGHTS, HISTORICAL RESEARCH AND STORYTELLING</p>
                <p className="text-sm text-gray-700">
                  Wednesday, 06 August 2025 marks the 60th anniversary of the Voting Rights Act, the crowning achievement of Lyndon Johnson's presidency...
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/2026473150/2013173794.jpeg"
                  alt="Philosophy"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <p className="text-sm text-gray-500 mb-2">APRIL 3, 2025</p>
                <CardTitle className="text-xl font-lato">
                  ALWAYS BEEN THERE: LEADING LADIES IN PHILOSOPHY
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#2C7565] mb-3">HAI INSIGHTS, HISTORICAL RESEARCH AND STORYTELLING</p>
                <p className="text-sm text-gray-700">
                  To study philosophy is to question the nature of knowing. For thousands of years, men and women have pondered existence...
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/2026473150/2550463488.jpeg"
                  alt="Tim Russert"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <p className="text-sm text-gray-500 mb-2">APRIL 1, 2025</p>
                <CardTitle className="text-xl font-lato">
                  TIM RUSSERT: ONE MAN'S IMPACT ON THE NATION
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#2C7565] mb-3">PRESS RELEASES, #CU, #JOHNCARROLLUNIVERSITY</p>
                <p className="text-sm text-gray-700">
                  Tim Russert: One Man's Impact on the Nation - HAI and Axiell Bring the Legacy of an Iconic Journalist to Life...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-lato text-[#003057] mb-8">
            Historical Research and Storytelling FAQs
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="bg-[#7BA3B8] text-white rounded-lg px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-4">
                How long does the typical history or exhibit project take?
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                As long as it needs to. Our team can typically complete tasks like in-depth historical research, interpretive planning, and oral histories in less than six months. Small projects tend to take closer to a year, while larger projects may take two or three years. Often, content development accounts for only part of the time it takes to complete a project—tasks like graphic design, fabrication and installation, and web development can take several months or years, too.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="bg-[#7BA3B8] text-white rounded-lg px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-4">
                Do you offer exhibit design and fabrication services?
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                Yes, we offer comprehensive exhibit design and fabrication services through our network of trusted partners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="bg-[#7BA3B8] text-white rounded-lg px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-4">
                What if I don't know how best to tell my story?
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                That's where we come in! Our team of experts will work with you to understand your goals and craft the best narrative approach.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="bg-[#7BA3B8] text-white rounded-lg px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-4">
                How much time and effort will a content development project require of my team?
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                We work to minimize the burden on your team while ensuring we capture your organization's unique story and perspective.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="bg-[#7BA3B8] text-white rounded-lg px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-4">
                Do you work only on projects that are historical in nature?
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                While history is our specialty, we work on a wide range of projects that involve research, storytelling, and experience design.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="bg-[#7BA3B8] text-white rounded-lg px-6 border-none">
              <AccordionTrigger className="hover:no-underline py-4">
                We are not local to the DC Metro area. Can you still help me?
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                Absolutely! We work with clients across the country and around the world.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003057] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-300">
            <p>Created by kw30928@gmail.com All rights reserved 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
