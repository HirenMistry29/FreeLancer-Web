"use client";
import { useState } from "react";
import {
  useAppSelector,
  useSaveStateToLocalStorageOnChange,
  useSetInitialStore,
} from "../../../lib/redux/hooks";
import { ShowForm, selectFormsOrder } from "../../../lib/redux/settingsSlice";
import { ProfileForm } from "../ResumeForm/ProfileForm";
import { WorkExperiencesForm } from "../ResumeForm/WorkExperiencesForm";
import { EducationsForm } from "../ResumeForm/EducationsForm";
import { ProjectsForm } from "../ResumeForm/ProjectsForm";
import { SkillsForm } from "../ResumeForm/SkillsForm";
import { ThemeForm } from "../ResumeForm/ThemeForm";
import { CustomForm } from "../ResumeForm/CustomForm";
import { FlexboxSpacer } from "../FlexboxSpacer";
import { cx } from "../../../lib/cx";

const formTypeToComponent: { [type in ShowForm]: () => JSX.Element } = {
  workExperiences: WorkExperiencesForm,
  educations: EducationsForm,
  projects: ProjectsForm,
  skills: SkillsForm,
  custom: CustomForm,
};

export const ResumeForm = () => {
  useSetInitialStore();
  useSaveStateToLocalStorageOnChange();

  const formsOrder = useAppSelector(selectFormsOrder);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={cx(
        "flex justify-center scrollbar scrollbar-track-gray-100 scrollbar-w-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end md:overflow-y-scroll",
        isHover && "scrollbar-thumb-gray-200"
      )}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <section className="flex max-w-2xl flex-col gap-8 p-[var(--resume-padding)]">
        <ProfileForm />
        {formsOrder.map((form) => {
          const Component = formTypeToComponent[form];
          return <Component key={form} />;
        })}
        <ThemeForm />
        <br />
      </section>
      <FlexboxSpacer maxWidth={50} className="hidden md:block" />
    </div>
  );
};
