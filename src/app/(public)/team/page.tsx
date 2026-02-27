// import Members from "@/components/Team/Members";

// export const dynamic = "force-static";

// const Team = () => {
//   return <Members />;
// };

// export default Team;

"use client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";

import ProfileCard from "@/components/ProfileCard";
import { teamData } from "@/data/teamData";

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-5xl font-bold mb-8 text-center tracking-wide uppercase border-b border-white/10 pb-4">
    {title}
  </h2>
);

const MembersGrid = ({ members }: { members: typeof teamData.companyHead }) => (
  <div className="flex flex-wrap justify-center gap-8">
    {members.map((member) => (
      <div key={member.id} className="flex flex-col items-center gap-3">
        <div className="">
          <HoverCard openDelay={100} closeDelay={200}>
            <HoverCardTrigger asChild>
              <div>
                <ProfileCard
                  avatarUrl={member.image}
                  miniAvatarUrl={member.image}
                  name={member.name}
                  title={member.role}
                  handle={member.name.toLowerCase().replace(/\s+/g, "")}
                  status={member.role}
                  contactText="LinkedIn"
                  showUserInfo={true}
                  onContactClick={() => window.open(member.linkedin, "_blank")}
                  enableTilt={true}
                  behindGlowEnabled={true}
                />
              </div>
            </HoverCardTrigger>

            {member.description && (
              <HoverCardContent className="w-80 p-4">
                <Card className="max-w-[340px]">
                  <CardHeader className="justify-between">
                    <div className="flex gap-5">
                      <Image
                        alt={member.name}
                        className="rounded-full"
                        height={40}
                        width={40}
                        src={member.image}
                      />
                      <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">
                          {member.name}
                        </h4>
                        <h5 className="text-small tracking-tight text-default-400">
                          @{member.name.toLowerCase().replace(/\s+/g, "")}
                        </h5>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="hover:bg-blue-400 hover:text-white"
                      size="sm"
                      onClick={() => window.open(member.linkedin, "_blank")}
                    >
                      Linkedin
                    </Button>
                  </CardHeader>
                  <CardBody className="px-3 py-0 text-small text-default-400">
                    <span className="pt-2 h-40">
                      <span aria-label="computer" className="py-2" role="img">
                        {member.description}
                      </span>
                    </span>
                  </CardBody>
                </Card>
              </HoverCardContent>
            )}
          </HoverCard>
        </div>
      </div>
    ))}
  </div>
);

const Members = () => {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold tracking-tight">Our Team</h1>
          <p className=" text-lg">The people behind Aam Pannaa Creations</p>
        </div>

        {/* Company Head */}
        <section className="min-h-screen">
          <SectionTitle title="Leadership & Advisors" />
          <MembersGrid members={teamData.companyHead} />
        </section>

        {/* Founder's Office */}
        <section className="min-h-screen">
          <SectionTitle title="Founder's Office" />
          <MembersGrid members={teamData.leadership} />
        </section>

        {/* Creative */}
        <section className="min-h-screen">
          <SectionTitle title="Creative & Technology" />
          <MembersGrid members={teamData.creative} />
        </section>

        {/* Business Development */}
        <section className="min-h-screen">
          <SectionTitle title="Business Development" />
          <MembersGrid members={teamData.businessDevelopment} />
        </section>
      </div>
    </main>
  );
};

export default Members;
