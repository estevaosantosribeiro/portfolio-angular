import { Component } from '@angular/core';
import { ItemPortfolio } from '../../models/item-portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
})
export class Portfolio {
  public itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'Controle de Medicamentos',
      urlImagem: 'https://i.imgur.com/OYyV8iY.gif',
      urlGif: 'https://i.imgur.com/OYyV8iY.gif',
      urlRepositorio: 'https://github.com/estevaosantosribeiro/controle-de-medicamentos',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de saúde, com o controle de fornecimento, estoque, funcionários, pacientes e retirada de prescrições — com foco na rastreabilidade das movimentações de estoque.`,
    },
    {
      titulo: 'Gestão de Equipamentos',
      urlImagem: 'https://i.imgur.com/AcU0BxT.gif',
      urlGif: 'https://i.imgur.com/AcU0BxT.gif',
      urlRepositorio: 'https://github.com/estevaosantosribeiro/gestao-de-equipamentos',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Gestão de Equipamentos controla o estoque de um almoxarifado, com a gestão de equipamentos e o registro de chamados de manutenção que eventualmente ocorrem durante o uso dos equipamentos. Também são inclusas informações sobre os fabricantes dos equipamentos para contato de suporte ou compras.`,
    },
  ];

  public itemPortfolioSelecionado?: ItemPortfolio;
}
