<template>
    <div>
        RoundList
        <div v-if="$apollo.loading">
            loading....
        </div>
        <div v-else>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">ชื่อบ่อ</th>
                        <th scope="col">วันที่เริ่มเลี้ยง</th>
                        <th scope="col">จำนวน</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="round in rounds" :key="round.id">
                        <td>{{ round.id }}</td>
                        <td>{{ round.pond.name }}</td>
                        <td>{{ round.start_date }}</td>
                        <td>{{ round.qty }}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import gql from "graphql-tag";

export default {
    apollo: {
        rounds: gql`
            {
                rounds {
                    id
                    start_date
                    qty
                    farm {
                        id
                        name
                        address
                    }
                    pond {
                        id
                        name
                    }
                }
            }
        `
    }
};
</script>
