"use client";
import { RiJavascriptLine } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { DiRuby } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { TiClipboard, TiTick } from "react-icons/ti";
import { PiGoodreadsLogoFill, PiBracketsCurly } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { SiElixir } from "react-icons/si";
import TechLabel from "./TechLabel";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
const techItems = [
  {
    icon: <RiJavascriptLine />,
    name: "nodejs",
    label: "Node.js",
  },
  {
    icon: <AiFillThunderbolt />,
    name: "serverless",
    label: "Serverless",
  },
  {
    icon: <DiRuby />,
    name: "ruby",
    label: "Ruby",
  },
  {
    icon: <FaPython />,
    name: "python",
    label: "Python",
  },
  {
    icon: <BiLogoPhp />,
    name: "php",
    label: "PHP",
  },
  {
    icon: <PiGoodreadsLogoFill />,
    name: "go",
    label: "Go",
  },
  {
    icon: <SiElixir />,
    name: "elixir",
    label: "Elixir",
  },
  {
    icon: <PiBracketsCurly />,
    name: "rest",
    label: "REST",
  },
  {
    icon: <CiMail />,
    name: "smtp",
    label: "SMTP",
  },
];
const codeStrings = {
  nodejs: {
    title: "Node,js",
    code: `import { Resend } from 'resend';

    const resend = new Resend('re_123456789');
    
    (async function() {
      try {
        const data = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'delivered@resend.dev',
          subject: 'Hello World',
          html: '<strong>it works!</strong>'
        });
    
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();`,
  },
  serverless: {
    title: "Serverless",
    code: `import { NextResponse } from 'next/server';
    export const runtime = 'edge';
    export const dynamic = 'force-dynamic';
    const RESEND_API_KEY = 're_123456789';
    export async function POST() {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':'Bearer {RESEND_API_KEY}'
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: 'delivered@resend.dev',
            subject: 'Hello World',
            html: '<strong>it works!</strong>',
          })
        });
      
        if (res.ok) {
          const data = await res.json();
          return NextResponse.json(data);
        }
      }`,
  },

  ruby: {
    title: "Ruby",
    code: `require "resend"

    Resend.api_key = "re_123456789"
    
    params = {
      "from": "onboarding@resend.dev",
      "to": "delivered@resend.dev",
      "subject": "Hello World",
      "html": "<strong>it works!</strong>"
    }
    
    sent = Resend::Emails.send(params)
    puts sent`,
  },

  python: {
    title: "Python",
    code: `import resend

    resend.api_key = "re_123456789"
    
    params = {
      "from": "onboarding@resend.dev",
      "to": ["delivered@resend.dev"],
      "subject": "Hello World",
      "html": "<strong>it works!</strong>",
    }
    
    email = resend.Emails.send(params)
    print(email)`,
  },

  php: {
    title: "PHP",
    code: `$resend = Resend::client('re_123456789');

    $resend->emails->send([
      'from' => 'onboarding@resend.dev',
      'to' => 'delivered@resend.dev',
      'subject' => 'Hello World',
      'html' => '<strong>it works!</strong>',
    ]);`,
  },

  go: {
    title: "Go",
    code: `package main

    import "github.com/resendlabs/resend-go"
    
    func main() {
      apiKey = "re_123456789"
    
      client := resend.NewClient(apiKey)
    
      params := &resend.SendEmailRequest{
        From:    "onboarding@resend.dev",
        To:      []string{"delivered@resend.dev"},
        Subject: "Hello World",
        Html:    "<strong>it works!</strong>",
      }
    
      client.Emails.Send(params)
    }`,
  },

  elixir: {
    title: "Elixir",
    code: `client = Resend.client(api_key: "re_123456789")

    Resend.Emails.send(client, %{
      from: "onboarding@resend.dev",
      to: "delivered@resend.dev",
      subject: "Hello World",
      html: "<strong>it works!</strong>"
    })`,
  },

  rest: {
    title: "REST",
    code: `curl -X POST 'https://api.resend.com/emails' 
    -H 'Authorization: Bearer re_123456789' 
    -H 'Content-Type: application/json' 
    -d $'{
      "from": "onboarding@resend.dev",
      "to": "delivered@resend.dev",
      "subject": "Hello World",
      "html": "<strong>it works!</strong>"
    }'`,
  },

  smtp: {
    title: "SMTP",
    code: `# Add these attributes to your settings.py file:
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
RESEND_SMTP_HOST = 'smtp.resend.com'
RESEND_SMTP_PORT = 587
RESEND_SMTP_USERNAME = 'resend'
RESEND_SMTP_PASSWORD = 're_123456789'

# Use Django's get_connection and EmailMessage:
with get_connection(
    host=settings.RESEND_SMTP_HOST,
    port=settings.RESEND_SMTP_PORT,
    username=settings.RESEND_SMTP_USERNAME,
    password=RESEND_SMTP_PASSWORD,
    use_tls=True,
    ) as connection:
        r = EmailMessage(
            from_email=onboarding@resend.dev,
            subject=Hello World,
            to=delivered@resend.dev,
            body=message,
            connection=connection).send()
`,
  },
};
const languageMap = {
  nodejs: "javascript",
  serverless: "javascript",
  ruby: "ruby",
  python: "python",
  php: "php",
  go: "go",
  elixir: "elixir",
  rest: "shell",
  smtp: "python",
};
export default function CodeViewer() {
  const [language, setLanguage] = useState("nodejs");
  const [copy, setCopy] = useState(false);
  return (
    <div className="mt-8">
      <div className="max-w-5xl flex mx-auto w-full text-center justify-evenly items-center flex-wrap">
        {techItems.map((item, index) => {
          return (
            <TechLabel key={index} item={item} setLanguage={setLanguage} />
          );
        })}
      </div>
      <div
        className="mx-auto max-w-5xl mt-6 min-w-[25rem] bg-[#00000] rounded-md border border-gray-800 border-[linear-gradient(
        to bottom, 
        red, 
        rgba(0, 0, 0, 0)
      ) 1 100%;] p-4"
      >
        <div className="flex justify-between w-full items-center">
          <p className="flex justify-center items-center p-1 cursor-pointer border border-gray-700 rounded-md hover:text-white text-[#92979C] transition-all duration-300 ease-in-out">
            <RiJavascriptLine className="mr-2 text-orange-300" />
            {codeStrings[language].title}
          </p>
          {copy ? (
            <button className="flex justify-center items-center p-1 cursor-pointer border border-gray-700 rounded-md text-[#92979C] hover:text-white transition-all duration-300 ease-in-out">
              <TiTick className="text-green-500" />
            </button>
          ) : (
            <button
              onClick={() => {
                navigator.clipboard.writeText(codeStrings[language].code);
                setCopy(true),
                  setTimeout(() => {
                    setCopy(false);
                  }, 3000);
              }}
              className="flex justify-center items-center p-1 cursor-pointer border border-gray-700 rounded-md text-[#92979C] hover:text-white transition-all duration-300 ease-in-out"
            >
              <TiClipboard />
            </button>
          )}
        </div>
        <SyntaxHighlighter
          wrapLongLines={true}
          showLineNumbers={true}
          language={languageMap[language]}
          style={twilight}
          customStyle={{
            background: "#00000",
            border: 0,
          }}
        >
          {codeStrings[language].code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
