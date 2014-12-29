'use strict';
!function(window, document, undefined) {

  var monochromePalette = {
    'black': '#13161a',
    'grayDarkest': '#26272b',
    'grayDarker': '#3f4145',
    'grayDark': '#5c5f63',
    'gray': '#999c9f',
    'grayLight': '#bfc2c5',
    'grayLighter': '#e1e2e5',
    'grayLightest': '#f0f1f2',
    'offwhite': '#f7f8fa',
    'white': '#fff'
  };

  // Order of these colors determines order of chart colors rendered
  // See the charts component theme.js for details
  var accentPalette = {
    'blue': '#005eb8',
    'orange': '#ea7600',
    'green': '#48a23f',
    'red': '#c8102e',
    'purple': '#565294',
    'yellowDark': '#ecc900',
    'blueLight': '#5995d1',
    'orangeDark': '#bc4d00',
    'greenLight': '#7ac16d',
    'redDark': '#76232f',
    'purpleLight': '#8b8ab4',
    'blueDark': '#00376f',
    'orangeLight': '#f79e4d',
    'greenDark': '#1e6012',
    'redLight': '#f7665e',
    'purpleDark': '#353559',
    'yellowLight': '#ffe95c',
    'blueLightest': '#becee9',
    'orangeLightest': '#f6d6bb',
    'greenLightest': '#cbe4c7',
    'redLightest': '#fad0d0',
    'purpleLightest': '#cecadf',
    'yellowLightest': '#fef9d1'
  };

  var typography = {
    'sansFontFamily': '"ge-sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'serifFontFamily': '"ge-serif", Georgia, serif',
    'monoFontFamily': 'Inconsolata, Consolas, monospace',
    'brandFontFamily': '"ge-inspira", "Helvetica Neue", Helvetica, Arial, sans-serif',
    'baseFontSize': '14px',
    'baseLineHeight': '20px',
    'textColor': monochromePalette.grayDarker
  };

  var brandkit = {
    'accentPalette': accentPalette,
    'monochromePalette': monochromePalette,
    'typography': typography
  };

  if (typeof define === 'function' && define.amd)
    define(function() { return brandkit; });
  else
    window.brandKit = brandkit;

}(window, document);
