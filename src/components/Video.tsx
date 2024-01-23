import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning
} from 'phosphor-react'

export default function Videos () {
  return (
    <section className='flex-1'>
      {/* video area */}
      <div className='bg-black flex justify-center'>
        <span className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          {/* TODO: video content */}
        </span>
      </div>

      <div className='p-8 max-w-[1100px] mx-auto'>
        <article className='flex items-start gap-16'>
          <span className='flex-1'>
            <h1 className='text-2xl font-bold'>
              Aula 01 - Abertura do Ignite Lab
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              Nessa aula vamos dar início ao projeto criando a estrutura base da
              aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também
              realizar o setup do nosso projeto no GraphCMS criando as entidades
              da aplicação e integrando a API GraphQL gerada pela plataforma no
              nosso front-end utilizando Apollo Client.
            </p>

            <div className='flex items-center gap-4 mt-6'>
              <img
                className='h-16 rounded-full border-2 border-blue-500'
                src='https://github.com/victorlabussiere.png'
                alt='avatar_icon'
              />

              <span className='flex flex-col gap-4 leading-relaxed'>
                <strong className='font-bold text-2xl block'>
                  Victor Labussiere
                </strong>
                <p className='text-gray-200 text-sm'>Vasco da Gama</p>
              </span>
            </div>
          </span>

          <span className='flex flex-col gap-4'>
            <a
              href='#'
              className='p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors'
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a
              href='#'
              className='p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-600 hover:text-gray-900 transition-colors'
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </span>
        </article>

        <article className='gap-8 mt-20 grid grid-cols-2'>
          <a
            href='#'
            className='bg-gray-700 overflow-hidden rounded flex items-stretch gap-6 hover:bg-gray-500 transition-colors'
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>

            <div className='py-6 leading-relaxed'>
              <strong className='text-sm text-gray-200 mt-2'>
                material complementar
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>

            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href='#'
            className='bg-gray-700 overflow-hidden rounded flex items-stretch gap-6 hover:bg-gray-500 transition-colors'
          >
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>

            <div className='py-6 leading-relaxed'>
              <strong className='text-sm text-gray-200 mt-2'>
                Wallpapers exclusivos
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>

            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </article>
      </div>
    </section>
  )
}
