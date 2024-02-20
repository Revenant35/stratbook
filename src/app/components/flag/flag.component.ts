import { AfterViewInit, Component, Input } from '@angular/core';
import { Country } from '@app/models/country';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-flag',
  standalone: true,
  imports: [],
  templateUrl: './flag.component.html',
  styleUrl: './flag.component.css',
})
export class FlagComponent implements AfterViewInit {
  readonly FLAGS = new Map([
    [
      'af',
      {
        country_code: 'af',
        country_name: 'Afghanistan',
        region: 'Asia',
        flag_url: 'assets/flags/af.svg',
      },
    ],
    [
      'ax',
      {
        country_code: 'ax',
        country_name: 'Åland Islands',
        region: 'Europe',
        flag_url: 'assets/flags/ax.svg',
      },
    ],
    [
      'al',
      {
        country_code: 'al',
        country_name: 'Albania',
        region: 'Europe',
        flag_url: 'assets/flags/al.svg',
      },
    ],
    [
      'dz',
      {
        country_code: 'dz',
        country_name: 'Algeria',
        region: 'Africa',
        flag_url: 'assets/flags/dz.svg',
      },
    ],
    [
      'as',
      {
        country_code: 'as',
        country_name: 'American Samoa',
        region: 'Oceania',
        flag_url: 'assets/flags/as.svg',
      },
    ],
    [
      'ad',
      {
        country_code: 'ad',
        country_name: 'Andorra',
        region: 'Europe',
        flag_url: 'assets/flags/ad.svg',
      },
    ],
    [
      'ao',
      {
        country_code: 'ao',
        country_name: 'Angola',
        region: 'Africa',
        flag_url: 'assets/flags/ao.svg',
      },
    ],
    [
      'ai',
      {
        country_code: 'ai',
        country_name: 'Anguilla',
        region: 'Americas',
        flag_url: 'assets/flags/ai.svg',
      },
    ],
    [
      'aq',
      {
        country_code: 'aq',
        country_name: 'Antarctica',
        region: 'Antarctica',
        flag_url: 'assets/flags/aq.svg',
      },
    ],
    [
      'ag',
      {
        country_code: 'ag',
        country_name: 'Antigua and Barbuda',
        region: 'Americas',
        flag_url: 'assets/flags/ag.svg',
      },
    ],
    [
      'ar',
      {
        country_code: 'ar',
        country_name: 'Argentina',
        region: 'Americas',
        flag_url: 'assets/flags/ar.svg',
      },
    ],
    [
      'am',
      {
        country_code: 'am',
        country_name: 'Armenia',
        region: 'Asia',
        flag_url: 'assets/flags/am.svg',
      },
    ],
    [
      'aw',
      {
        country_code: 'aw',
        country_name: 'Aruba',
        region: 'Americas',
        flag_url: 'assets/flags/aw.svg',
      },
    ],
    [
      'au',
      {
        country_code: 'au',
        country_name: 'Australia',
        region: 'Oceania',
        flag_url: 'assets/flags/au.svg',
      },
    ],
    [
      'at',
      {
        country_code: 'at',
        country_name: 'Austria',
        region: 'Europe',
        flag_url: 'assets/flags/at.svg',
      },
    ],
    [
      'az',
      {
        country_code: 'az',
        country_name: 'Azerbaijan',
        region: 'Asia',
        flag_url: 'assets/flags/az.svg',
      },
    ],
    [
      'bs',
      {
        country_code: 'bs',
        country_name: 'Bahamas',
        region: 'Americas',
        flag_url: 'assets/flags/bs.svg',
      },
    ],
    [
      'bh',
      {
        country_code: 'bh',
        country_name: 'Bahrain',
        region: 'Asia',
        flag_url: 'assets/flags/bh.svg',
      },
    ],
    [
      'bd',
      {
        country_code: 'bd',
        country_name: 'Bangladesh',
        region: 'Asia',
        flag_url: 'assets/flags/bd.svg',
      },
    ],
    [
      'bb',
      {
        country_code: 'bb',
        country_name: 'Barbados',
        region: 'Americas',
        flag_url: 'assets/flags/bb.svg',
      },
    ],
    [
      'by',
      {
        country_code: 'by',
        country_name: 'Belarus',
        region: 'Europe',
        flag_url: 'assets/flags/by.svg',
      },
    ],
    [
      'be',
      {
        country_code: 'be',
        country_name: 'Belgium',
        region: 'Europe',
        flag_url: 'assets/flags/be.svg',
      },
    ],
    [
      'bz',
      {
        country_code: 'bz',
        country_name: 'Belize',
        region: 'Americas',
        flag_url: 'assets/flags/bz.svg',
      },
    ],
    [
      'bj',
      {
        country_code: 'bj',
        country_name: 'Benin',
        region: 'Africa',
        flag_url: 'assets/flags/bj.svg',
      },
    ],
    [
      'bm',
      {
        country_code: 'bm',
        country_name: 'Bermuda',
        region: 'Americas',
        flag_url: 'assets/flags/bm.svg',
      },
    ],
    [
      'bt',
      {
        country_code: 'bt',
        country_name: 'Bhutan',
        region: 'Asia',
        flag_url: 'assets/flags/bt.svg',
      },
    ],
    [
      'bo',
      {
        country_code: 'bo',
        country_name: 'Bolivia',
        region: 'Americas',
        flag_url: 'assets/flags/bo.svg',
      },
    ],
    [
      'bq',
      {
        country_code: 'bq',
        country_name: 'Bonaire, Sint Eustatius and Saba',
        region: 'Americas',
        flag_url: 'assets/flags/bq.svg',
      },
    ],
    [
      'ba',
      {
        country_code: 'ba',
        country_name: 'Bosnia and Herzegovina',
        region: 'Europe',
        flag_url: 'assets/flags/ba.svg',
      },
    ],
    [
      'bw',
      {
        country_code: 'bw',
        country_name: 'Botswana',
        region: 'Africa',
        flag_url: 'assets/flags/bw.svg',
      },
    ],
    [
      'bv',
      {
        country_code: 'bv',
        country_name: 'Bouvet Island',
        region: 'Antarctica',
        flag_url: 'assets/flags/bv.svg',
      },
    ],
    [
      'br',
      {
        country_code: 'br',
        country_name: 'Brazil',
        region: 'Americas',
        flag_url: 'assets/flags/br.svg',
      },
    ],
    [
      'io',
      {
        country_code: 'io',
        country_name: 'British Indian Ocean Territory',
        region: 'Asia',
        flag_url: 'assets/flags/io.svg',
      },
    ],
    [
      'bn',
      {
        country_code: 'bn',
        country_name: 'Brunei Darussalam',
        region: 'Asia',
        flag_url: 'assets/flags/bn.svg',
      },
    ],
    [
      'bg',
      {
        country_code: 'bg',
        country_name: 'Bulgaria',
        region: 'Europe',
        flag_url: 'assets/flags/bg.svg',
      },
    ],
    [
      'bf',
      {
        country_code: 'bf',
        country_name: 'Burkina Faso',
        region: 'Africa',
        flag_url: 'assets/flags/bf.svg',
      },
    ],
    [
      'bi',
      {
        country_code: 'bi',
        country_name: 'Burundi',
        region: 'Africa',
        flag_url: 'assets/flags/bi.svg',
      },
    ],
    [
      'cv',
      {
        country_code: 'cv',
        country_name: 'Cabo Verde',
        region: 'Africa',
        flag_url: 'assets/flags/cv.svg',
      },
    ],
    [
      'kh',
      {
        country_code: 'kh',
        country_name: 'Cambodia',
        region: 'Asia',
        flag_url: 'assets/flags/kh.svg',
      },
    ],
    [
      'cm',
      {
        country_code: 'cm',
        country_name: 'Cameroon',
        region: 'Africa',
        flag_url: 'assets/flags/cm.svg',
      },
    ],
    [
      'ca',
      {
        country_code: 'ca',
        country_name: 'Canada',
        region: 'Americas',
        flag_url: 'assets/flags/ca.svg',
      },
    ],
    [
      'ky',
      {
        country_code: 'ky',
        country_name: 'Cayman Islands',
        region: 'Americas',
        flag_url: 'assets/flags/ky.svg',
      },
    ],
    [
      'cf',
      {
        country_code: 'cf',
        country_name: 'Central African Republic',
        region: 'Africa',
        flag_url: 'assets/flags/cf.svg',
      },
    ],
    [
      'td',
      {
        country_code: 'td',
        country_name: 'Chad',
        region: 'Africa',
        flag_url: 'assets/flags/td.svg',
      },
    ],
    [
      'cl',
      {
        country_code: 'cl',
        country_name: 'Chile',
        region: 'Americas',
        flag_url: 'assets/flags/cl.svg',
      },
    ],
    [
      'cn',
      {
        country_code: 'cn',
        country_name: 'China',
        region: 'Asia',
        flag_url: 'assets/flags/cn.svg',
      },
    ],
    [
      'cx',
      {
        country_code: 'cx',
        country_name: 'Christmas Island',
        region: 'Asia',
        flag_url: 'assets/flags/cx.svg',
      },
    ],
    [
      'cc',
      {
        country_code: 'cc',
        country_name: 'Cocos (Keeling) Islands',
        region: 'Asia',
        flag_url: 'assets/flags/cc.svg',
      },
    ],
    [
      'co',
      {
        country_code: 'co',
        country_name: 'Colombia',
        region: 'Americas',
        flag_url: 'assets/flags/co.svg',
      },
    ],
    [
      'km',
      {
        country_code: 'km',
        country_name: 'Comoros',
        region: 'Africa',
        flag_url: 'assets/flags/km.svg',
      },
    ],
    [
      'ck',
      {
        country_code: 'ck',
        country_name: 'Cook Islands',
        region: 'Oceania',
        flag_url: 'assets/flags/ck.svg',
      },
    ],
    [
      'cr',
      {
        country_code: 'cr',
        country_name: 'Costa Rica',
        region: 'Americas',
        flag_url: 'assets/flags/cr.svg',
      },
    ],
    [
      'hr',
      {
        country_code: 'hr',
        country_name: 'Croatia',
        region: 'Europe',
        flag_url: 'assets/flags/hr.svg',
      },
    ],
    [
      'cu',
      {
        country_code: 'cu',
        country_name: 'Cuba',
        region: 'Americas',
        flag_url: 'assets/flags/cu.svg',
      },
    ],
    [
      'cw',
      {
        country_code: 'cw',
        country_name: 'Curaçao',
        region: 'Americas',
        flag_url: 'assets/flags/cw.svg',
      },
    ],
    [
      'cy',
      {
        country_code: 'cy',
        country_name: 'Cyprus',
        region: 'Europe',
        flag_url: 'assets/flags/cy.svg',
      },
    ],
    [
      'cz',
      {
        country_code: 'cz',
        country_name: 'Czech Republic',
        region: 'Europe',
        flag_url: 'assets/flags/cz.svg',
      },
    ],
    [
      'ci',
      {
        country_code: 'ci',
        country_name: "Côte d'Ivoire",
        region: 'Africa',
        flag_url: 'assets/flags/ci.svg',
      },
    ],
    [
      'cd',
      {
        country_code: 'cd',
        country_name: 'Democratic Republic of the Congo',
        region: 'Africa',
        flag_url: 'assets/flags/cd.svg',
      },
    ],
    [
      'dk',
      {
        country_code: 'dk',
        country_name: 'Denmark',
        region: 'Europe',
        flag_url: 'assets/flags/dk.svg',
      },
    ],
    [
      'dj',
      {
        country_code: 'dj',
        country_name: 'Djibouti',
        region: 'Africa',
        flag_url: 'assets/flags/dj.svg',
      },
    ],
    [
      'dm',
      {
        country_code: 'dm',
        country_name: 'Dominica',
        region: 'Americas',
        flag_url: 'assets/flags/dm.svg',
      },
    ],
    [
      'do',
      {
        country_code: 'do',
        country_name: 'Dominican Republic',
        region: 'Americas',
        flag_url: 'assets/flags/do.svg',
      },
    ],
    [
      'ec',
      {
        country_code: 'ec',
        country_name: 'Ecuador',
        region: 'Americas',
        flag_url: 'assets/flags/ec.svg',
      },
    ],
    [
      'eg',
      {
        country_code: 'eg',
        country_name: 'Egypt',
        region: 'Africa',
        flag_url: 'assets/flags/eg.svg',
      },
    ],
    [
      'sv',
      {
        country_code: 'sv',
        country_name: 'El Salvador',
        region: 'Americas',
        flag_url: 'assets/flags/sv.svg',
      },
    ],
    [
      'gq',
      {
        country_code: 'gq',
        country_name: 'Equatorial Guinea',
        region: 'Africa',
        flag_url: 'assets/flags/gq.svg',
      },
    ],
    [
      'er',
      {
        country_code: 'er',
        country_name: 'Eritrea',
        region: 'Africa',
        flag_url: 'assets/flags/er.svg',
      },
    ],
    [
      'ee',
      {
        country_code: 'ee',
        country_name: 'Estonia',
        region: 'Europe',
        flag_url: 'assets/flags/ee.svg',
      },
    ],
    [
      'sz',
      {
        country_code: 'sz',
        country_name: 'Eswatini',
        region: 'Africa',
        flag_url: 'assets/flags/sz.svg',
      },
    ],
    [
      'et',
      {
        country_code: 'et',
        country_name: 'Ethiopia',
        region: 'Africa',
        flag_url: 'assets/flags/et.svg',
      },
    ],
    [
      'fk',
      {
        country_code: 'fk',
        country_name: 'Falkland Islands (Malvinas)',
        region: 'Americas',
        flag_url: 'assets/flags/fk.svg',
      },
    ],
    [
      'fo',
      {
        country_code: 'fo',
        country_name: 'Faroe Islands',
        region: 'Europe',
        flag_url: 'assets/flags/fo.svg',
      },
    ],
    [
      'fm',
      {
        country_code: 'fm',
        country_name: 'Federated States of Micronesia',
        region: 'Oceania',
        flag_url: 'assets/flags/fm.svg',
      },
    ],
    [
      'fj',
      {
        country_code: 'fj',
        country_name: 'Fiji',
        region: 'Oceania',
        flag_url: 'assets/flags/fj.svg',
      },
    ],
    [
      'fi',
      {
        country_code: 'fi',
        country_name: 'Finland',
        region: 'Europe',
        flag_url: 'assets/flags/fi.svg',
      },
    ],
    [
      'fr',
      {
        country_code: 'fr',
        country_name: 'France',
        region: 'Europe',
        flag_url: 'assets/flags/fr.svg',
      },
    ],
    [
      'gf',
      {
        country_code: 'gf',
        country_name: 'French Guiana',
        region: 'Americas',
        flag_url: 'assets/flags/gf.svg',
      },
    ],
    [
      'pf',
      {
        country_code: 'pf',
        country_name: 'French Polynesia',
        region: 'Oceania',
        flag_url: 'assets/flags/pf.svg',
      },
    ],
    [
      'tf',
      {
        country_code: 'tf',
        country_name: 'French Southern Territories',
        region: 'Antarctica',
        flag_url: 'assets/flags/tf.svg',
      },
    ],
    [
      'ga',
      {
        country_code: 'ga',
        country_name: 'Gabon',
        region: 'Africa',
        flag_url: 'assets/flags/ga.svg',
      },
    ],
    [
      'gm',
      {
        country_code: 'gm',
        country_name: 'Gambia',
        region: 'Africa',
        flag_url: 'assets/flags/gm.svg',
      },
    ],
    [
      'ge',
      {
        country_code: 'ge',
        country_name: 'Georgia',
        region: 'Asia',
        flag_url: 'assets/flags/ge.svg',
      },
    ],
    [
      'de',
      {
        country_code: 'de',
        country_name: 'Germany',
        region: 'Europe',
        flag_url: 'assets/flags/de.svg',
      },
    ],
    [
      'gh',
      {
        country_code: 'gh',
        country_name: 'Ghana',
        region: 'Africa',
        flag_url: 'assets/flags/gh.svg',
      },
    ],
    [
      'gi',
      {
        country_code: 'gi',
        country_name: 'Gibraltar',
        region: 'Europe',
        flag_url: 'assets/flags/gi.svg',
      },
    ],
    [
      'gr',
      {
        country_code: 'gr',
        country_name: 'Greece',
        region: 'Europe',
        flag_url: 'assets/flags/gr.svg',
      },
    ],
    [
      'gl',
      {
        country_code: 'gl',
        country_name: 'Greenland',
        region: 'Americas',
        flag_url: 'assets/flags/gl.svg',
      },
    ],
    [
      'gd',
      {
        country_code: 'gd',
        country_name: 'Grenada',
        region: 'Americas',
        flag_url: 'assets/flags/gd.svg',
      },
    ],
    [
      'gp',
      {
        country_code: 'gp',
        country_name: 'Guadeloupe',
        region: 'Americas',
        flag_url: 'assets/flags/gp.svg',
      },
    ],
    [
      'gu',
      {
        country_code: 'gu',
        country_name: 'Guam',
        region: 'Oceania',
        flag_url: 'assets/flags/gu.svg',
      },
    ],
    [
      'gt',
      {
        country_code: 'gt',
        country_name: 'Guatemala',
        region: 'Americas',
        flag_url: 'assets/flags/gt.svg',
      },
    ],
    [
      'gg',
      {
        country_code: 'gg',
        country_name: 'Guernsey',
        region: 'Europe',
        flag_url: 'assets/flags/gg.svg',
      },
    ],
    [
      'gn',
      {
        country_code: 'gn',
        country_name: 'Guinea',
        region: 'Africa',
        flag_url: 'assets/flags/gn.svg',
      },
    ],
    [
      'gw',
      {
        country_code: 'gw',
        country_name: 'Guinea-Bissau',
        region: 'Africa',
        flag_url: 'assets/flags/gw.svg',
      },
    ],
    [
      'gy',
      {
        country_code: 'gy',
        country_name: 'Guyana',
        region: 'Americas',
        flag_url: 'assets/flags/gy.svg',
      },
    ],
    [
      'ht',
      {
        country_code: 'ht',
        country_name: 'Haiti',
        region: 'Americas',
        flag_url: 'assets/flags/ht.svg',
      },
    ],
    [
      'hm',
      {
        country_code: 'hm',
        country_name: 'Heard Island and McDonald Islands',
        region: 'Antarctica',
        flag_url: 'assets/flags/hm.svg',
      },
    ],
    [
      'va',
      {
        country_code: 'va',
        country_name: 'Holy See',
        region: 'Europe',
        flag_url: 'assets/flags/va.svg',
      },
    ],
    [
      'hn',
      {
        country_code: 'hn',
        country_name: 'Honduras',
        region: 'Americas',
        flag_url: 'assets/flags/hn.svg',
      },
    ],
    [
      'hk',
      {
        country_code: 'hk',
        country_name: 'Hong Kong',
        region: 'Asia',
        flag_url: 'assets/flags/hk.svg',
      },
    ],
    [
      'hu',
      {
        country_code: 'hu',
        country_name: 'Hungary',
        region: 'Europe',
        flag_url: 'assets/flags/hu.svg',
      },
    ],
    [
      'is',
      {
        country_code: 'is',
        country_name: 'Iceland',
        region: 'Europe',
        flag_url: 'assets/flags/is.svg',
      },
    ],
    [
      'in',
      {
        country_code: 'in',
        country_name: 'India',
        region: 'Asia',
        flag_url: 'assets/flags/in.svg',
      },
    ],
    [
      'id',
      {
        country_code: 'id',
        country_name: 'Indonesia',
        region: 'Asia',
        flag_url: 'assets/flags/id.svg',
      },
    ],
    [
      'ir',
      {
        country_code: 'ir',
        country_name: 'Iran',
        region: 'Asia',
        flag_url: 'assets/flags/ir.svg',
      },
    ],
    [
      'iq',
      {
        country_code: 'iq',
        country_name: 'Iraq',
        region: 'Asia',
        flag_url: 'assets/flags/iq.svg',
      },
    ],
    [
      'ie',
      {
        country_code: 'ie',
        country_name: 'Ireland',
        region: 'Europe',
        flag_url: 'assets/flags/ie.svg',
      },
    ],
    [
      'im',
      {
        country_code: 'im',
        country_name: 'Isle of Man',
        region: 'Europe',
        flag_url: 'assets/flags/im.svg',
      },
    ],
    [
      'il',
      {
        country_code: 'il',
        country_name: 'Israel',
        region: 'Asia',
        flag_url: 'assets/flags/il.svg',
      },
    ],
    [
      'it',
      {
        country_code: 'it',
        country_name: 'Italy',
        region: 'Europe',
        flag_url: 'assets/flags/it.svg',
      },
    ],
    [
      'jm',
      {
        country_code: 'jm',
        country_name: 'Jamaica',
        region: 'Americas',
        flag_url: 'assets/flags/jm.svg',
      },
    ],
    [
      'jp',
      {
        country_code: 'jp',
        country_name: 'Japan',
        region: 'Asia',
        flag_url: 'assets/flags/jp.svg',
      },
    ],
    [
      'je',
      {
        country_code: 'je',
        country_name: 'Jersey',
        region: 'Europe',
        flag_url: 'assets/flags/je.svg',
      },
    ],
    [
      'jo',
      {
        country_code: 'jo',
        country_name: 'Jordan',
        region: '',
        flag_url: 'assets/flags/jo.svg',
      },
    ],
    [
      'kz',
      {
        country_code: 'kz',
        country_name: 'Kazakhstan',
        region: '',
        flag_url: 'assets/flags/kz.svg',
      },
    ],
    [
      'ke',
      {
        country_code: 'ke',
        country_name: 'Kenya',
        region: '',
        flag_url: 'assets/flags/ke.svg',
      },
    ],
    [
      'ki',
      {
        country_code: 'ki',
        country_name: 'Kiribati',
        region: '',
        flag_url: 'assets/flags/ki.svg',
      },
    ],
    [
      'kw',
      {
        country_code: 'kw',
        country_name: 'Kuwait',
        region: '',
        flag_url: 'assets/flags/kw.svg',
      },
    ],
    [
      'kg',
      {
        country_code: 'kg',
        country_name: 'Kyrgyzstan',
        region: '',
        flag_url: 'assets/flags/kg.svg',
      },
    ],
    [
      'la',
      {
        country_code: 'la',
        country_name: 'Laos',
        region: '',
        flag_url: 'assets/flags/la.svg',
      },
    ],
    [
      'lv',
      {
        country_code: 'lv',
        country_name: 'Latvia',
        region: '',
        flag_url: 'assets/flags/lv.svg',
      },
    ],
    [
      'lb',
      {
        country_code: 'lb',
        country_name: 'Lebanon',
        region: '',
        flag_url: 'assets/flags/lb.svg',
      },
    ],
    [
      'ls',
      {
        country_code: 'ls',
        country_name: 'Lesotho',
        region: '',
        flag_url: 'assets/flags/ls.svg',
      },
    ],
    [
      'lr',
      {
        country_code: 'lr',
        country_name: 'Liberia',
        region: '',
        flag_url: 'assets/flags/lr.svg',
      },
    ],
    [
      'ly',
      {
        country_code: 'ly',
        country_name: 'Libya',
        region: '',
        flag_url: 'assets/flags/ly.svg',
      },
    ],
    [
      'li',
      {
        country_code: 'li',
        country_name: 'Liechtenstein',
        region: '',
        flag_url: 'assets/flags/li.svg',
      },
    ],
    [
      'lt',
      {
        country_code: 'lt',
        country_name: 'Lithuania',
        region: '',
        flag_url: 'assets/flags/lt.svg',
      },
    ],
    [
      'lu',
      {
        country_code: 'lu',
        country_name: 'Luxembourg',
        region: '',
        flag_url: 'assets/flags/lu.svg',
      },
    ],
    [
      'mo',
      {
        country_code: 'mo',
        country_name: 'Macau',
        region: '',
        flag_url: 'assets/flags/mo.svg',
      },
    ],
    [
      'mg',
      {
        country_code: 'mg',
        country_name: 'Madagascar',
        region: '',
        flag_url: 'assets/flags/mg.svg',
      },
    ],
    [
      'mw',
      {
        country_code: 'mw',
        country_name: 'Malawi',
        region: '',
        flag_url: 'assets/flags/mw.svg',
      },
    ],
    [
      'my',
      {
        country_code: 'my',
        country_name: 'Malaysia',
        region: '',
        flag_url: 'assets/flags/my.svg',
      },
    ],
    [
      'mv',
      {
        country_code: 'mv',
        country_name: 'Maldives',
        region: '',
        flag_url: 'assets/flags/mv.svg',
      },
    ],
    [
      'ml',
      {
        country_code: 'ml',
        country_name: 'Mali',
        region: '',
        flag_url: 'assets/flags/ml.svg',
      },
    ],
    [
      'mt',
      {
        country_code: 'mt',
        country_name: 'Malta',
        region: '',
        flag_url: 'assets/flags/mt.svg',
      },
    ],
    [
      'mh',
      {
        country_code: 'mh',
        country_name: 'Marshall Islands',
        region: '',
        flag_url: 'assets/flags/mh.svg',
      },
    ],
    [
      'mq',
      {
        country_code: 'mq',
        country_name: 'Martinique',
        region: '',
        flag_url: 'assets/flags/mq.svg',
      },
    ],
    [
      'mr',
      {
        country_code: 'mr',
        country_name: 'Mauritania',
        region: '',
        flag_url: 'assets/flags/mr.svg',
      },
    ],
    [
      'mu',
      {
        country_code: 'mu',
        country_name: 'Mauritius',
        region: '',
        flag_url: 'assets/flags/mu.svg',
      },
    ],
    [
      'yt',
      {
        country_code: 'yt',
        country_name: 'Mayotte',
        region: '',
        flag_url: 'assets/flags/yt.svg',
      },
    ],
    [
      'mx',
      {
        country_code: 'mx',
        country_name: 'Mexico',
        region: '',
        flag_url: 'assets/flags/mx.svg',
      },
    ],
    [
      'md',
      {
        country_code: 'md',
        country_name: 'Moldova',
        region: '',
        flag_url: 'assets/flags/md.svg',
      },
    ],
    [
      'mc',
      {
        country_code: 'mc',
        country_name: 'Monaco',
        region: '',
        flag_url: 'assets/flags/mc.svg',
      },
    ],
    [
      'mn',
      {
        country_code: 'mn',
        country_name: 'Mongolia',
        region: '',
        flag_url: 'assets/flags/mn.svg',
      },
    ],
    [
      'me',
      {
        country_code: 'me',
        country_name: 'Montenegro',
        region: '',
        flag_url: 'assets/flags/me.svg',
      },
    ],
    [
      'ms',
      {
        country_code: 'ms',
        country_name: 'Montserrat',
        region: '',
        flag_url: 'assets/flags/ms.svg',
      },
    ],
    [
      'ma',
      {
        country_code: 'ma',
        country_name: 'Morocco',
        region: '',
        flag_url: 'assets/flags/ma.svg',
      },
    ],
    [
      'mz',
      {
        country_code: 'mz',
        country_name: 'Mozambique',
        region: '',
        flag_url: 'assets/flags/mz.svg',
      },
    ],
    [
      'mm',
      {
        country_code: 'mm',
        country_name: 'Myanmar',
        region: '',
        flag_url: 'assets/flags/mm.svg',
      },
    ],
    [
      'na',
      {
        country_code: 'na',
        country_name: 'Namibia',
        region: '',
        flag_url: 'assets/flags/na.svg',
      },
    ],
    [
      'nr',
      {
        country_code: 'nr',
        country_name: 'Nauru',
        region: '',
        flag_url: 'assets/flags/nr.svg',
      },
    ],
    [
      'np',
      {
        country_code: 'np',
        country_name: 'Nepal',
        region: '',
        flag_url: 'assets/flags/np.svg',
      },
    ],
    [
      'nl',
      {
        country_code: 'nl',
        country_name: 'Netherlands',
        region: '',
        flag_url: 'assets/flags/nl.svg',
      },
    ],
    [
      'nc',
      {
        country_code: 'nc',
        country_name: 'New Caledonia',
        region: '',
        flag_url: 'assets/flags/nc.svg',
      },
    ],
    [
      'nz',
      {
        country_code: 'nz',
        country_name: 'New Zealand',
        region: '',
        flag_url: 'assets/flags/nz.svg',
      },
    ],
    [
      'ni',
      {
        country_code: 'ni',
        country_name: 'Nicaragua',
        region: '',
        flag_url: 'assets/flags/ni.svg',
      },
    ],
    [
      'ne',
      {
        country_code: 'ne',
        country_name: 'Niger',
        region: '',
        flag_url: 'assets/flags/ne.svg',
      },
    ],
    [
      'ng',
      {
        country_code: 'ng',
        country_name: 'Nigeria',
        region: '',
        flag_url: 'assets/flags/ng.svg',
      },
    ],
    [
      'nu',
      {
        country_code: 'nu',
        country_name: 'Niue',
        region: '',
        flag_url: 'assets/flags/nu.svg',
      },
    ],
    [
      'nf',
      {
        country_code: 'nf',
        country_name: 'Norfolk Island',
        region: '',
        flag_url: 'assets/flags/nf.svg',
      },
    ],
    [
      'kp',
      {
        country_code: 'kp',
        country_name: 'North Korea',
        region: '',
        flag_url: 'assets/flags/kp.svg',
      },
    ],
    [
      'mk',
      {
        country_code: 'mk',
        country_name: 'North Macedonia',
        region: '',
        flag_url: 'assets/flags/mk.svg',
      },
    ],
    [
      'mp',
      {
        country_code: 'mp',
        country_name: 'Northern Mariana Islands',
        region: '',
        flag_url: 'assets/flags/mp.svg',
      },
    ],
    [
      'no',
      {
        country_code: 'no',
        country_name: 'Norway',
        region: '',
        flag_url: 'assets/flags/no.svg',
      },
    ],
    [
      'om',
      {
        country_code: 'om',
        country_name: 'Oman',
        region: '',
        flag_url: 'assets/flags/om.svg',
      },
    ],
    [
      'pk',
      {
        country_code: 'pk',
        country_name: 'Pakistan',
        region: '',
        flag_url: 'assets/flags/pk.svg',
      },
    ],
    [
      'pw',
      {
        country_code: 'pw',
        country_name: 'Palau',
        region: '',
        flag_url: 'assets/flags/pw.svg',
      },
    ],
    [
      'pa',
      {
        country_code: 'pa',
        country_name: 'Panama',
        region: '',
        flag_url: 'assets/flags/pa.svg',
      },
    ],
    [
      'pg',
      {
        country_code: 'pg',
        country_name: 'Papua New Guinea',
        region: '',
        flag_url: 'assets/flags/pg.svg',
      },
    ],
    [
      'py',
      {
        country_code: 'py',
        country_name: 'Paraguay',
        region: '',
        flag_url: 'assets/flags/py.svg',
      },
    ],
    [
      'pe',
      {
        country_code: 'pe',
        country_name: 'Peru',
        region: '',
        flag_url: 'assets/flags/pe.svg',
      },
    ],
    [
      'ph',
      {
        country_code: 'ph',
        country_name: 'Philippines',
        region: '',
        flag_url: 'assets/flags/ph.svg',
      },
    ],
    [
      'pn',
      {
        country_code: 'pn',
        country_name: 'Pitcairn',
        region: '',
        flag_url: 'assets/flags/pn.svg',
      },
    ],
    [
      'pl',
      {
        country_code: 'pl',
        country_name: 'Poland',
        region: '',
        flag_url: 'assets/flags/pl.svg',
      },
    ],
    [
      'pt',
      {
        country_code: 'pt',
        country_name: 'Portugal',
        region: '',
        flag_url: 'assets/flags/pt.svg',
      },
    ],
    [
      'pr',
      {
        country_code: 'pr',
        country_name: 'Puerto Rico',
        region: '',
        flag_url: 'assets/flags/pr.svg',
      },
    ],
    [
      'qa',
      {
        country_code: 'qa',
        country_name: 'Qatar',
        region: '',
        flag_url: 'assets/flags/qa.svg',
      },
    ],
    [
      'cg',
      {
        country_code: 'cg',
        country_name: 'Republic of the Congo',
        region: '',
        flag_url: 'assets/flags/cg.svg',
      },
    ],
    [
      'ro',
      {
        country_code: 'ro',
        country_name: 'Romania',
        region: '',
        flag_url: 'assets/flags/ro.svg',
      },
    ],
    [
      'ru',
      {
        country_code: 'ru',
        country_name: 'Russia',
        region: '',
        flag_url: 'assets/flags/ru.svg',
      },
    ],
    [
      'rw',
      {
        country_code: 'rw',
        country_name: 'Rwanda',
        region: '',
        flag_url: 'assets/flags/rw.svg',
      },
    ],
    [
      're',
      {
        country_code: 're',
        country_name: 'Réunion',
        region: '',
        flag_url: 'assets/flags/re.svg',
      },
    ],
    [
      'bl',
      {
        country_code: 'bl',
        country_name: 'Saint Barthélemy',
        region: '',
        flag_url: 'assets/flags/bl.svg',
      },
    ],
    [
      'sh',
      {
        country_code: 'sh',
        country_name: 'Saint Helena, Ascension and Tristan da Cunha',
        region: '',
        flag_url: 'assets/flags/sh.svg',
      },
    ],
    [
      'kn',
      {
        country_code: 'kn',
        country_name: 'Saint Kitts and Nevis',
        region: '',
        flag_url: 'assets/flags/kn.svg',
      },
    ],
    [
      'lc',
      {
        country_code: 'lc',
        country_name: 'Saint Lucia',
        region: '',
        flag_url: 'assets/flags/lc.svg',
      },
    ],
    [
      'mf',
      {
        country_code: 'mf',
        country_name: 'Saint Martin',
        region: '',
        flag_url: 'assets/flags/mf.svg',
      },
    ],
    [
      'pm',
      {
        country_code: 'pm',
        country_name: 'Saint Pierre and Miquelon',
        region: '',
        flag_url: 'assets/flags/pm.svg',
      },
    ],
    [
      'vc',
      {
        country_code: 'vc',
        country_name: 'Saint Vincent and the Grenadines',
        region: '',
        flag_url: 'assets/flags/vc.svg',
      },
    ],
    [
      'ws',
      {
        country_code: 'ws',
        country_name: 'Samoa',
        region: '',
        flag_url: 'assets/flags/ws.svg',
      },
    ],
    [
      'sm',
      {
        country_code: 'sm',
        country_name: 'San Marino',
        region: '',
        flag_url: 'assets/flags/sm.svg',
      },
    ],
    [
      'st',
      {
        country_code: 'st',
        country_name: 'Sao Tome and Principe',
        region: '',
        flag_url: 'assets/flags/st.svg',
      },
    ],
    [
      'sa',
      {
        country_code: 'sa',
        country_name: 'Saudi Arabia',
        region: '',
        flag_url: 'assets/flags/sa.svg',
      },
    ],
    [
      'sn',
      {
        country_code: 'sn',
        country_name: 'Senegal',
        region: '',
        flag_url: 'assets/flags/sn.svg',
      },
    ],
    [
      'rs',
      {
        country_code: 'rs',
        country_name: 'Serbia',
        region: '',
        flag_url: 'assets/flags/rs.svg',
      },
    ],
    [
      'sc',
      {
        country_code: 'sc',
        country_name: 'Seychelles',
        region: '',
        flag_url: 'assets/flags/sc.svg',
      },
    ],
    [
      'sl',
      {
        country_code: 'sl',
        country_name: 'Sierra Leone',
        region: '',
        flag_url: 'assets/flags/sl.svg',
      },
    ],
    [
      'sg',
      {
        country_code: 'sg',
        country_name: 'Singapore',
        region: '',
        flag_url: 'assets/flags/sg.svg',
      },
    ],
    [
      'sx',
      {
        country_code: 'sx',
        country_name: 'Sint Maarten',
        region: '',
        flag_url: 'assets/flags/sx.svg',
      },
    ],
    [
      'sk',
      {
        country_code: 'sk',
        country_name: 'Slovakia',
        region: '',
        flag_url: 'assets/flags/sk.svg',
      },
    ],
    [
      'si',
      {
        country_code: 'si',
        country_name: 'Slovenia',
        region: '',
        flag_url: 'assets/flags/si.svg',
      },
    ],
    [
      'sb',
      {
        country_code: 'sb',
        country_name: 'Solomon Islands',
        region: '',
        flag_url: 'assets/flags/sb.svg',
      },
    ],
    [
      'so',
      {
        country_code: 'so',
        country_name: 'Somalia',
        region: '',
        flag_url: 'assets/flags/so.svg',
      },
    ],
    [
      'za',
      {
        country_code: 'za',
        country_name: 'South Africa',
        region: '',
        flag_url: 'assets/flags/za.svg',
      },
    ],
    [
      'gs',
      {
        country_code: 'gs',
        country_name: 'South Georgia and the South Sandwich Islands',
        region: '',
        flag_url: 'assets/flags/gs.svg',
      },
    ],
    [
      'kr',
      {
        country_code: 'kr',
        country_name: 'South Korea',
        region: '',
        flag_url: 'assets/flags/kr.svg',
      },
    ],
    [
      'ss',
      {
        country_code: 'ss',
        country_name: 'South Sudan',
        region: '',
        flag_url: 'assets/flags/ss.svg',
      },
    ],
    [
      'es',
      {
        country_code: 'es',
        country_name: 'Spain',
        region: '',
        flag_url: 'assets/flags/es.svg',
      },
    ],
    [
      'lk',
      {
        country_code: 'lk',
        country_name: 'Sri Lanka',
        region: '',
        flag_url: 'assets/flags/lk.svg',
      },
    ],
    [
      'ps',
      {
        country_code: 'ps',
        country_name: 'State of Palestine',
        region: '',
        flag_url: 'assets/flags/ps.svg',
      },
    ],
    [
      'sd',
      {
        country_code: 'sd',
        country_name: 'Sudan',
        region: '',
        flag_url: 'assets/flags/sd.svg',
      },
    ],
    [
      'sr',
      {
        country_code: 'sr',
        country_name: 'Suriname',
        region: '',
        flag_url: 'assets/flags/sr.svg',
      },
    ],
    [
      'sj',
      {
        country_code: 'sj',
        country_name: 'Svalbard and Jan Mayen',
        region: '',
        flag_url: 'assets/flags/sj.svg',
      },
    ],
    [
      'se',
      {
        country_code: 'se',
        country_name: 'Sweden',
        region: '',
        flag_url: 'assets/flags/se.svg',
      },
    ],
    [
      'ch',
      {
        country_code: 'ch',
        country_name: 'Switzerland',
        region: '',
        flag_url: 'assets/flags/ch.svg',
      },
    ],
    [
      'sy',
      {
        country_code: 'sy',
        country_name: 'Syria',
        region: '',
        flag_url: 'assets/flags/sy.svg',
      },
    ],
    [
      'tw',
      {
        country_code: 'tw',
        country_name: 'Taiwan',
        region: '',
        flag_url: 'assets/flags/tw.svg',
      },
    ],
    [
      'tj',
      {
        country_code: 'tj',
        country_name: 'Tajikistan',
        region: '',
        flag_url: 'assets/flags/tj.svg',
      },
    ],
    [
      'tz',
      {
        country_code: 'tz',
        country_name: 'Tanzania',
        region: '',
        flag_url: 'assets/flags/tz.svg',
      },
    ],
    [
      'th',
      {
        country_code: 'th',
        country_name: 'Thailand',
        region: '',
        flag_url: 'assets/flags/th.svg',
      },
    ],
    [
      'tl',
      {
        country_code: 'tl',
        country_name: 'Timor-Leste',
        region: '',
        flag_url: 'assets/flags/tl.svg',
      },
    ],
    [
      'tg',
      {
        country_code: 'tg',
        country_name: 'Togo',
        region: '',
        flag_url: 'assets/flags/tg.svg',
      },
    ],
    [
      'tk',
      {
        country_code: 'tk',
        country_name: 'Tokelau',
        region: '',
        flag_url: 'assets/flags/tk.svg',
      },
    ],
    [
      'to',
      {
        country_code: 'to',
        country_name: 'Tonga',
        region: '',
        flag_url: 'assets/flags/to.svg',
      },
    ],
    [
      'tt',
      {
        country_code: 'tt',
        country_name: 'Trinidad and Tobago',
        region: '',
        flag_url: 'assets/flags/tt.svg',
      },
    ],
    [
      'tn',
      {
        country_code: 'tn',
        country_name: 'Tunisia',
        region: '',
        flag_url: 'assets/flags/tn.svg',
      },
    ],
    [
      'tm',
      {
        country_code: 'tm',
        country_name: 'Turkmenistan',
        region: '',
        flag_url: 'assets/flags/tm.svg',
      },
    ],
    [
      'tc',
      {
        country_code: 'tc',
        country_name: 'Turks and Caicos Islands',
        region: '',
        flag_url: 'assets/flags/tc.svg',
      },
    ],
    [
      'tv',
      {
        country_code: 'tv',
        country_name: 'Tuvalu',
        region: '',
        flag_url: 'assets/flags/tv.svg',
      },
    ],
    [
      'tr',
      {
        country_code: 'tr',
        country_name: 'Türkiye',
        region: '',
        flag_url: 'assets/flags/tr.svg',
      },
    ],
    [
      'ug',
      {
        country_code: 'ug',
        country_name: 'Uganda',
        region: '',
        flag_url: 'assets/flags/ug.svg',
      },
    ],
    [
      'ua',
      {
        country_code: 'ua',
        country_name: 'Ukraine',
        region: '',
        flag_url: 'assets/flags/ua.svg',
      },
    ],
    [
      'ae',
      {
        country_code: 'ae',
        country_name: 'United Arab Emirates',
        region: '',
        flag_url: 'assets/flags/ae.svg',
      },
    ],
    [
      'gb',
      {
        country_code: 'gb',
        country_name: 'United Kingdom',
        region: '',
        flag_url: 'assets/flags/gb.svg',
      },
    ],
    [
      'um',
      {
        country_code: 'um',
        country_name: 'United States Minor Outlying Islands',
        region: '',
        flag_url: 'assets/flags/um.svg',
      },
    ],
    [
      'us',
      {
        country_code: 'us',
        country_name: 'United States of America',
        region: '',
        flag_url: 'assets/flags/us.svg',
      },
    ],
    [
      'uy',
      {
        country_code: 'uy',
        country_name: 'Uruguay',
        region: '',
        flag_url: 'assets/flags/uy.svg',
      },
    ],
    [
      'uz',
      {
        country_code: 'uz',
        country_name: 'Uzbekistan',
        region: '',
        flag_url: 'assets/flags/uz.svg',
      },
    ],
    [
      'vu',
      {
        country_code: 'vu',
        country_name: 'Vanuatu',
        region: '',
        flag_url: 'assets/flags/vu.svg',
      },
    ],
    [
      've',
      {
        country_code: 've',
        country_name: 'Venezuela',
        region: '',
        flag_url: 'assets/flags/ve.svg',
      },
    ],
    [
      'vn',
      {
        country_code: 'vn',
        country_name: 'Vietnam',
        region: '',
        flag_url: 'assets/flags/vn.svg',
      },
    ],
    [
      'vg',
      {
        country_code: 'vg',
        country_name: 'Virgin Islands (British)',
        region: '',
        flag_url: 'assets/flags/vg.svg',
      },
    ],
    [
      'vi',
      {
        country_code: 'vi',
        country_name: 'Virgin Islands (U.S.)',
        region: '',
        flag_url: 'assets/flags/vi.svg',
      },
    ],
    [
      'wf',
      {
        country_code: 'wf',
        country_name: 'Wallis and Futuna',
        region: '',
        flag_url: 'assets/flags/wf.svg',
      },
    ],
    [
      'eh',
      {
        country_code: 'eh',
        country_name: 'Western Sahara',
        region: '',
        flag_url: 'assets/flags/eh.svg',
      },
    ],
    [
      'ye',
      {
        country_code: 'ye',
        country_name: 'Yemen',
        region: '',
        flag_url: 'assets/flags/ye.svg',
      },
    ],
    [
      'zm',
      {
        country_code: 'zm',
        country_name: 'Zambia',
        region: '',
        flag_url: 'assets/flags/zm.svg',
      },
    ],
    [
      'zw',
      {
        country_code: 'zw',
        country_name: 'Zimbabwe',
        region: '',
        flag_url: 'assets/flags/zw.svg',
      },
    ],
    // sh-ac Ascension Island
    // es-pv Basque Country
    // ic Canary Islands
    // es-ct Catalonia
    // cefta Central European Free Trade Agreement
    // cp Clipperton Island
    // dg Diego Garcia
    // eac East African Community
    // gb-eng England
    // eu Europe
    // es-ga Galicia
    // xk Kosovo
    // arab League of Arab States
    // gb-nir Northern Ireland
    // pc Pacific Community
    // sh-hl Saint Helena
    // gb-sct Scotland
    // sh-ta Tristan da Cunha
    // un United Nations
    // xx Unknown
    // gb-wls Wales
  ]);

  @Input({ required: true }) country_code!: string;

  get country() {
    return this.FLAGS.get(this.country_code) as Country | undefined;
  }

  get country_name() {
    return this.country?.country_name;
  }

  get country_region() {
    return this.country?.region;
  }

  get flag_url() {
    return this.country?.flag_url;
  }

  ngAfterViewInit() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );

    // @ts-ignore
    [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl),
    );
  }
}
