import React from 'react';
import {FaJava,FaCss3Alt, FaHtml5, FaJs, FaReact,} from 'react-icons/fa';
import {SiGit, SiSpring, SiSpringboot, SiExpress, SiMongodb, SiNodedotjs, SiMysql, SiPostgresql, SiNextdotjs, SiNestjs, SiPython, SiGithub, SiLinux} from 'react-icons/si';

const SkillItem = ({icon: Icon, text}) => {
    return (<div className="inline-flex items-center bg-white shadow rounded-full m-2 pr-2">
            <div className={`flex items-center justify-center bg-[#BEB2BB] rounded-full h-8 xs:h-6 w-8 xs:w-6`}>
                <span className="text-white">
                    <Icon/>
                </span>
            </div>
            <span className="ml-2 xl:text-xl xs:text-xs text-indigo-600">{text}</span>
        </div>);
};

export default function Skills() {
    return (<div className="xl:px-44 xs:px-0">
            <h1 className="mb-4">Skills</h1>
            <div className="flex flex-wrap justify-between">
                <SkillItem
                    icon={FaJava}
                    text="Java"
                />
                <SkillItem
                    icon={FaJs}
                    text="JavaScript"
                />
                <SkillItem
                    icon={SiPython}
                    text="Python"
                />
                <SkillItem
                    icon={SiMongodb}
                    text="MongoDB"
                />
                <SkillItem
                    icon={SiExpress}
                    text="Express"
                />
                <SkillItem
                    icon={FaReact}
                    text="React"
                />
                <SkillItem
                    icon={SiNodedotjs}
                    text="Node"
                />
                <SkillItem
                    icon={SiSpring}
                    text="Spring"
                />
                <SkillItem
                    icon={SiSpringboot}
                    text="Spring Boot"
                />
                <SkillItem
                    icon={SiNestjs}
                    text="NestJS"
                />
                <SkillItem
                    icon={SiNextdotjs}
                    text="Next.js"
                />
                <SkillItem
                    icon={SiGithub}
                    text="GitHub"
                />
                <SkillItem
                    icon={SiMysql}
                    text="MySQL"
                />
                <SkillItem
                    icon={SiPostgresql}
                    text="PostgreSQL"
                />
                <SkillItem
                    icon={SiLinux}
                    text="Linux"
                />
            </div>
        </div>);
}
