import Image from "next/image";
import React from "react";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div>
      <div className="w-full h-80 relative">
        <Image className="object-cover backdrop-grayscale-0 backdrop-blur-sm"
          src="https://www.careershifters.org/sites/default/files/field/image/play_0.jpg"
          fill={true}
          alt="Who we are"
        />
        <div className="absolute bottom-5 left-5 bg-gradient-to-r from-green-300 to-fuchsia-100 text-black">
          <h1 className="font-bold text-2xl">
          私たちは誰なのか。 私達がすること
          </h1>
          <h2>子どもたちの指導力となるよう力を与え、関わり、教育する</h2>
        </div>
      </div>
      <div className="justify-center grid grid-cols-2 gap-x-20 mt-9 p-3  ">
        <div className="flex-col grid-rows-2 my-2">
          <h1 className="text-7xl font-extrabold">我々の使命</h1>
          <p className="text-justify text-base grid-flow-col my-2 gap-2 auto-rows-min">
          子どもたちと女性を下層階級からエンパワーメントし、関与させ、教育する
          社会の各セクション。
            
          彼らが立ち上がることができるように
          自分たち自身で、必要としている社会で自分たちの声を見つけてください。 
            
          建てられる
          あらゆる個人の尊重、尊厳、平等について、
          彼らの性別、カースト、階級。
          </p>
          <p>
          これらの子供たちと女性に自分自身の魅力を発見してもらうために
          可能性を最大限に発揮し、確実に能力を発揮できるようスキルを身につける
          このポテンシャルを活用できます。
          
            
          </p>
        </div>
        <div className="flex-col grid-rows-2 my-2">
          <h1 className="text-7xl font-extrabold">私達のビジョン</h1>
          <p className="text-justify text-base grid-flow-col my-2 gap-2 auto-rows-min">
          困難を抱える子どもたちや女性たちの力になるために
          より良いサービスを構築できるようにすることで、最も基本的なニーズを満たすことができます。
          自分たちのためにコミュニティベースのアプローチをとることで、自分たちの人生を
          発達。
            <br/>
            人々にインスピレーションを与え、やる気を起こさせ、来てもらうよう奨励する
            一緒に、より良い社会を作る責任を負います。
            へのアクセスと特権を利用して、限界に位置する個人
             他の人を助けてください。
          </p>
          <div className="mt-9">
          <Button url="/contact" text="お問い合わせ"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
