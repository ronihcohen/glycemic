
<template>
    <tr>
        <td colspan="2">
            <table>
                <tr v-if="data.country">
                    <td class="title">
                        Country
                    </td>
                    <td>
                        {{data.country}}
                    </td>
                </tr>
                <tr v-if="data.foodManufacturer">
                    <td class="title">
                        Food Manufacturer
                    </td>
                    <td>
                        {{data.foodManufacturer}}
                    </td>
                </tr>
                <tr v-if="data.standardServeSize">
                    <td class="title">
                        Standard Serve Size (g)
                    </td>
                    <td>
                        {{data.standardServeSize}}
                    </td>
                </tr>
                <tr v-if="data.carbohydratePerServe">
                    <td class="title">
                        Carbohydrate per Serve (g)
                    </td>
                    <td>
                        {{data.carbohydratePerServe}}
                    </td>
                </tr>
                <tr v-if="data.gl">
                    <td class="title">
                        Glycemic Load (GL)
                    </td>
                    <td>
                        {{data.gl}}
                    </td>
                </tr>
                <tr v-if="data.yearOfTest">
                    <td class="title">
                        Year of Test
                    </td>
                    <td>
                        {{data.yearOfTest}}
                    </td>
                </tr>
                <tr v-if="data.sem">
                    <td class="title">
                        SEM
                    </td>
                    <td>
                        {{data.sem}}
                    </td>
                </tr>
                <tr v-if="data.timePeriod">
                    <td class="title">
                        Time Period of Test
                    </td>
                    <td>
                        {{data.timePeriod}}
                    </td>
                </tr>
                <tr v-if="data.numberOfSubjects">
                    <td class="title">
                        Number of Subjects in Test
                    </td>
                    <td>
                        {{data.numberOfSubjects}}
                    </td>
                </tr>
                <tr v-if="data.type">
                    <td class="title">
                        Type of Subjects in Test
                    </td>
                    <td>
                        {{data.type}}
                    </td>
                </tr>
                <tr v-if="data.reference">
                    <td class="title">
                        Reference
                    </td>
                    <td>
                        {{data.reference}}
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>

<script>
export default {
  name: "Details",
  props: { data: Object }
};
</script>

<style scoped>
.title {
  font-weight: bold;
  padding-right: 15px;
}
table {
  border-spacing: 5px;
  margin: 0px 15px;
}
</style>