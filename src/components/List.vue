<template>
  <table cellpadding="0" cellspacing="0">
    <thead>
      <th>Produto</th>
      <th>Carioca Celulares</th>
      <th>Trocafone</th>
      <th>Balão da informática</th>
      <th>Refone</th>
    </thead>
    <tbody>
      <tr>
        <td>Samsung Galaxy S6 32GB Preto</td>
        <td class="win">
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
      </tr>
      <tr>
        <td>Samsung Galaxy S6 32GB Preto</td>
        <td class="loose">
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
      </tr>
      <tr>
        <td>Samsung Galaxy S6 32GB Preto</td>
        <td class="win">
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
      </tr>
      <tr>
        <td>Samsung Galaxy S6 32GB Preto</td>
        <td class="win">
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
        <td>
          <strong>R$1239,90</strong>
          <small>R$1499,90</small>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'list',
  data () {
  }
}
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
    background: #FFF;
    color: #666;
    border-radius: 5px;
    box-shadow: 0 0 10px #ddd;
    padding: 20px;

    th, td {
      border-left: 1px solid #eee;
      padding: 12px;

      &:first-child {
        border-left: 0;
      }
    }

    thead th {
      color: #333;
    }

    tbody {
      td {
        text-align: center;
        border-top: 1px solid #eee;

        &:not(:first-child) {
          width: 150px;
        }

        &:first-child {
          font-weight: bold;
        }

        strong {
          font-size: 14px;
          color: #999;
          display: block;
        }

        &.win strong {
          color: #0FA597;
        }

        &.loose strong {
          color: #CA403C;
        }
      }
    }
  }
</style>
